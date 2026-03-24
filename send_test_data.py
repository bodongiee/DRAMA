#!/usr/bin/env python3
"""
DRAMA 테스트 데이터 송신 스크립트
ws://127.0.0.1:1111/ws 로 정적 포즈 데이터를 반복 전송합니다. (Ctrl+C로 종료)
"""

import asyncio
import json
import websockets

WS_URL = "ws://127.0.0.1:1111/ws"
INTERVAL = 0.1  # 초 (10 Hz)

PAYLOAD = {
    "left": {
        "arm" : [-0.342, 0.423, 0.207, -2.377, -0.991, 0, 0],
		"hand": [-0.246,0,0,0, 0.177,0,0,0, 0.108,0,0,0, -0.092,0,0,0, -0.269,0,0,0],
        "controller": [0.3,  1.2, 0.1,  1.0, 0.0, 0.0, 0.0],
        "eef":        [0.25, 1.1, 0.05, 0.707, 0.0, 0.707, 0.0],
    },
    "right": {
        "arm" : [-0.162, -0.474, 1.311, -0.365, -1.352, -1.28, 0.325],
		"hand": [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        "controller": [-0.3,  1.2, 0.1,  1.0, 0.0, 0.0, 0.0],
        "eef":        [-0.25, 1.1, 0.05, 0.707, 0.0, -0.707, 0.0],
    },
}

DATA = json.dumps(PAYLOAD)


async def run():
    print(f"Connecting to {WS_URL} ...")
    try:
        async with websockets.connect(WS_URL) as ws:
            print("Connected. Sending static pose at 10Hz (Ctrl+C to stop)")
            i = 0
            while True:
                await ws.send(DATA)
                i += 1
                print(f"\r[{i}] sent", end="", flush=True)
                await asyncio.sleep(INTERVAL)
    except ConnectionRefusedError:
        print(f"\n[ERROR] {WS_URL} 에 연결할 수 없습니다. 서버가 실행 중인지 확인하세요.")
    except KeyboardInterrupt:
        print("\nStopped.")


if __name__ == "__main__":
    asyncio.run(run())
