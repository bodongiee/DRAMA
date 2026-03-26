import { writable, get } from 'svelte/store'

const WS_URL = 'ws://' + window.location.host + '/ws'

export const joints      = writable({})
export const trajectory  = writable({ controller_l: null, controller_r: null, eef_l: null, eef_r: null })
export const activated   = writable({ left: false, right: false })
export const connectionStatus = writable('System Ready')
export const robotJointDefs   = writable([])

// manual mode: WebSocket 업데이트 일시 정지
export const manualMode = writable(false)

// trail 전체 초기화 토큰
export const trailResetToken = writable(0)
export function resetTrail() { trailResetToken.update(n => n + 1) }

// 역방향 이동 시 trail point 개수 조정 (음수 = 제거)
// { controller_l: n, controller_r: n, eef_l: n, eef_r: n }
export const trailAdjust = writable(null)

// true 이면 trajectory store 업데이트 시 trail 점을 추가하지 않음 (역방향 이동 중)
export const suppressTrail = writable(false)

// 레코딩
export const isRecording = writable(false)
let _recordBuffer = []
let _isRecordingValue = false
isRecording.subscribe(v => { _isRecordingValue = v })

export function startRecording() {
  _recordBuffer = []
  isRecording.set(true)
}

export function stopRecording() {
  isRecording.set(false)
  const result = {}
  _recordBuffer.forEach((d, i) => { result[`Step-${i + 1}`] = d })
  _recordBuffer = []
  return result
}

// 뷰어 배경(Background) 표시 여부 (기본: off)
export const showGround = writable(false)

// 조인트 정보(Overlay) 표시 여부 (기본: off)
export const showJointInfo = writable(false)

// 그리드(Grid) 표시 여부 (기본: off)
export const showGrid = writable(false)

// 카메라 자동 회전 표시 여부 (기본: off)
export const autoRotate = writable(false)

// 수평면(Horizontal Plane) 표시 여부, 높이(m), 불투명도
export const showHPlane    = writable(false)
export const hPlaneHeight  = writable(0)
export const hPlaneOpacity = writable(0.15)

// 현재 활성화된 탭 관리
export const activeTab = writable('sync')

export const robotScene = writable(null)

let robotInstance = null
let manualModeValue = false
manualMode.subscribe(v => { manualModeValue = v })

export function setRobot(robot) {
  robotInstance = robot
}

export function getRobot() {
  return robotInstance
}

export function setJointAngle(name, value) {
  if (robotInstance && robotInstance.joints[name]) {
    robotInstance.joints[name].setJointValue(value)
  }
  joints.update(j => ({ ...j, [name]: value }))
}

// prefix에 해당하는 조인트에 배열 값을 순서대로 매핑
function applyJointArray(prefix, values, updates) {
  const names = get(robotJointDefs)
    .filter(j => j.name.startsWith(prefix))
    .map(j => j.name)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))

  values.forEach((val, i) => {
    if (i >= names.length) return
    if (robotInstance?.joints[names[i]]) {
      robotInstance.joints[names[i]].setJointValue(val)
    }
    updates[names[i]] = val
  })
}

// 저장된 스텝 데이터를 뷰어에 적용 (재생용)
export function applyStepData(step) {
  if (!step) return
  const jointUpdates = {}
  if (step.left?.arm)   applyJointArray('arm_l_',    step.left.arm,   jointUpdates)
  if (step.left?.hand)  applyJointArray('finger_l_', step.left.hand,  jointUpdates)
  if (step.right?.arm)  applyJointArray('arm_r_',    step.right.arm,  jointUpdates)
  if (step.right?.hand) applyJointArray('finger_r_', step.right.hand, jointUpdates)
  if (Object.keys(jointUpdates).length > 0) joints.update(j => ({ ...j, ...jointUpdates }))

  const parsePose = arr => arr && arr.length >= 7
    ? { x: arr[0], y: arr[1], z: arr[2], qw: arr[3], qx: arr[4], qy: arr[5], qz: arr[6] }
    : null
  const trajUpdates = {}
  const cl = parsePose(step.left?.controller);  if (cl) trajUpdates.controller_l = cl
  const cr = parsePose(step.right?.controller); if (cr) trajUpdates.controller_r = cr
  const el = parsePose(step.left?.eef);         if (el) trajUpdates.eef_l = el
  const er = parsePose(step.right?.eef);        if (er) trajUpdates.eef_r = er
  if (step.activated) activated.set({ left: !!step.activated.left, right: !!step.activated.right })
  if (Object.keys(trajUpdates).length > 0) trajectory.update(t => ({ ...t, ...trajUpdates }))
}

export function initWebSocket() {
  const ws = new WebSocket(WS_URL)

  ws.onopen  = () => connectionStatus.set('Connected')
  ws.onclose = () => connectionStatus.set('Disconnected')
  ws.onerror = () => connectionStatus.set('Error')

  ws.onmessage = (event) => {
    if (manualModeValue) return

    const data = JSON.parse(event.data)

    // 새 포맷: { left: { arm, hand, controller, eef }, right: { ... } }
    if (data.left || data.right) {
      // arm / hand → joints
      const jointUpdates = {}
      if (data.left?.arm)   applyJointArray('arm_l_',    data.left.arm,   jointUpdates)
      if (data.left?.hand)  applyJointArray('finger_l_', data.left.hand,  jointUpdates)
      if (data.right?.arm)  applyJointArray('arm_r_',    data.right.arm,  jointUpdates)
      if (data.right?.hand) applyJointArray('finger_r_', data.right.hand, jointUpdates)
      if (Object.keys(jointUpdates).length > 0) joints.update(j => ({ ...j, ...jointUpdates }))

      // controller / eef → trajectory  [x, y, z, qw, qx, qy, qz]
      const parsePose = arr => arr && arr.length >= 7
        ? { x: arr[0], y: arr[1], z: arr[2], qw: arr[3], qx: arr[4], qy: arr[5], qz: arr[6] }
        : null
      const trajUpdates = {}
      const cl = parsePose(data.left?.controller);  if (cl) trajUpdates.controller_l = cl
      const cr = parsePose(data.right?.controller); if (cr) trajUpdates.controller_r = cr
      const el = parsePose(data.left?.eef);         if (el) trajUpdates.eef_l = el
      const er = parsePose(data.right?.eef);        if (er) trajUpdates.eef_r = er
      if (data.activated) {
        activated.set({
          left:  !!data.activated.left,
          right: !!data.activated.right,
        })
      }
      if (Object.keys(trajUpdates).length > 0) trajectory.update(t => ({ ...t, ...trajUpdates }))
      if (_isRecordingValue) {
        _recordBuffer.push({
          timestamp: Date.now(),
          left:      data.left      ?? null,
          right:     data.right     ?? null,
          activated: data.activated ?? null,
        })
      }
      return
    }

    // 기존 포맷 (하위 호환)
    if (data.joints) {
      if (robotInstance) {
        for (const [name, val] of Object.entries(data.joints)) {
          if (robotInstance.joints[name]) robotInstance.joints[name].setJointValue(val)
        }
      }
      joints.set(data.joints)
    }

    if (data.trajectory) trajectory.set(data.trajectory)
  }

  return ws
}
