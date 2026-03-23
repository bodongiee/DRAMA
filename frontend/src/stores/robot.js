import { writable } from 'svelte/store'

export const joints      = writable({})
export const trajectory  = writable({ vr_l: null, vr_r: null, robot_l: null, robot_r: null })
export const connectionStatus = writable('System Ready')
export const robotJointDefs   = writable([])

// manual mode: WebSocket 업데이트 일시 정지
export const manualMode = writable(false)

// 뷰어 배경(Background) 표시 여부 (기본: off)
export const showGround = writable(false)

// 조인트 정보(Overlay) 표시 여부 (기본: off)
export const showJointInfo = writable(false)

// 그리드(Grid) 표시 여부 (기본: off)
export const showGrid = writable(false)

// 카메라 자동 회전 표시 여부 (기본: off)
export const autoRotate = writable(false)

// 현재 활성화된 탭 관리
export const activeTab = writable('sync')

let robotInstance = null
let manualModeValue = false
manualMode.subscribe(v => { manualModeValue = v })

export function setRobot(robot) {
  robotInstance = robot
}

export function setJointAngle(name, value) {
  if (robotInstance && robotInstance.joints[name]) {
    robotInstance.joints[name].setJointValue(value)
  }
  joints.update(j => ({ ...j, [name]: value }))
}

export function initWebSocket() {
  const ws = new WebSocket('ws://' + window.location.host + '/ws')

  ws.onopen  = () => connectionStatus.set('Connected')
  ws.onclose = () => connectionStatus.set('Disconnected')
  ws.onerror = () => connectionStatus.set('Error')

  ws.onmessage = (event) => {
    if (manualModeValue) return   // manual 모드에서는 WebSocket 무시

    const data = JSON.parse(event.data)

    if (data.joints) {
      if (robotInstance) {
        for (const [name, val] of Object.entries(data.joints)) {
          if (robotInstance.joints[name]) {
            robotInstance.joints[name].setJointValue(val)
          }
        }
      }
      joints.set(data.joints)
    }

    if (data.trajectory) {
      trajectory.set(data.trajectory)
    }
  }

  return ws
}
