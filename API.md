# DRAMA WebSocket API

API specification for sending robot data to the DRAMA dashboard.

---

## Connection

| Field | Value |
|-------|-------|
| Protocol | WebSocket |
| Host | `<DRAMA server IP>` |
| Port | `1111` |
| Path | `/ws` |
| Full URL | `ws://<DRAMA server IP>:1111/ws` |

> For local testing: `ws://127.0.0.1:1111/ws`

---

## Message Format

- Encoding: **UTF-8 text**
- Format: **JSON**
- Recommended rate: **10 Hz** (every 100 ms)

---

## JSON Schema

```json
{
    "left": {
        "arm": [j1, j2, j3, j4, j5, j6, j7],
        "hand": [f1_1, f1_2, f1_3, f1_4,
                 f2_1, f2_2, f2_3, f2_4,
                 f3_1, f3_2, f3_3, f3_4,
                 f4_1, f4_2, f4_3, f4_4,
                 f5_1, f5_2, f5_3, f5_4],
        "controller": [x, y, z, qw, qx, qy, qz],
        "eef": [x, y, z, qw, qx, qy, qz]
    },
    "right": {
        "arm": [j1, j2, j3, j4, j5, j6, j7],
        "hand": [f1_1, f1_2, f1_3, f1_4,
                f2_1, f2_2, f2_3, f2_4,
                f3_1, f3_2, f3_3, f3_4,
                f4_1, f4_2, f4_3, f4_4,
                f5_1, f5_2, f5_3, f5_4],
        "controller": [x, y, z, qw, qx, qy, qz],
        "eef":        [x, y, z, qw, qx, qy, qz]
    }
}
```

---

## Field Reference

### `arm` — Arm joint angles

| Index | Field | Unit | Description |
|-------|-------|------|-------------|
| 0 | j1 | rad | Joint 1 |
| 1 | j2 | rad | Joint 2 |
| 2 | j3 | rad | Joint 3 |
| 3 | j4 | rad | Joint 4 |
| 4 | j5 | rad | Joint 5 |
| 5 | j6 | rad | Joint 6 |
| 6 | j7 | rad | Joint 7 |

URDF mapping: `arm_l_joint1` ~ `arm_l_joint7` / `arm_r_joint1` ~ `arm_r_joint7`
Array order follows **natural sort** order of joint names.

---

### `hand` — Finger joint angles

20 values total (5 fingers × 4 joints each), unit: **rad**

| Index | Field | Description |
|-------|-------|-------------|
| 0–3   | f1_1 ~ f1_4 | Finger 1, joints 1–4 |
| 4–7   | f2_1 ~ f2_4 | Finger 2, joints 1–4 |
| 8–11  | f3_1 ~ f3_4 | Finger 3, joints 1–4 |
| 12–15 | f4_1 ~ f4_4 | Finger 4, joints 1–4 |
| 16–19 | f5_1 ~ f5_4 | Finger 5, joints 1–4 |

URDF mapping: `finger_l_1` ~ `finger_l_20` / `finger_r_1` ~ `finger_r_20`
Array order follows **natural sort** order of joint names.

---

### `controller` / `eef` — Pose (position + orientation)

7 values: **[x, y, z, qw, qx, qy, qz]**

| Index | Field | Unit | Description |
|-------|-------|------|-------------|
| 0 | x  | m | X position |
| 1 | y  | m | Y position |
| 2 | z  | m | Z position |
| 3 | qw | — | Quaternion W |
| 4 | qx | — | Quaternion X |
| 5 | qy | — | Quaternion Y |
| 6 | qz | — | Quaternion Z |

- `controller`: VR controller / input device pose
- `eef`: Robot end-effector pose

---

## Example Message

```json
{
    "left": {
        "arm": [0.1, -0.3, 0.5, -1.2, 0.0, 0.8, 0.0],
        "hand": [
            0.0, 0.1, 0.2, 0.1,
            0.0, 0.1, 0.2, 0.1,
            0.0, 0.1, 0.2, 0.1,
            0.0, 0.1, 0.2, 0.1,
            0.0, 0.1, 0.2, 0.1
        ],
        "controller": [0.3, 1.2, 0.1, 1.0, 0.0, 0.0, 0.0],
        "eef":        [0.25, 1.1, 0.05, 0.707, 0.0, 0.707, 0.0]
    },
    "right": {
        "arm": [-0.1, -0.3, -0.5, -1.2, 0.0, 0.8, 0.0],
        "hand": [
            0.0, 0.1, 0.2, 0.1,
            0.0, 0.1, 0.2, 0.1,
            0.0, 0.1, 0.2, 0.1,
            0.0, 0.1, 0.2, 0.1,
            0.0, 0.1, 0.2, 0.1
        ],
        "controller": [-0.3, 1.2, 0.1, 1.0, 0.0, 0.0, 0.0],
        "eef":        [-0.25, 1.1, 0.05, 0.707, 0.0, -0.707, 0.0]
    }
}
```

---

## Behavior Notes

- **Manual Mode enabled**: incoming data is ignored; dashboard slider values are preserved.
- **Partial messages allowed**: any subset of `arm`, `hand`, `controller`, `eef` may be omitted. Missing fields are not updated.
- **Independent sides**: `left` or `right` may be omitted independently.

---

## Testing

Use `send_test_data.py` to send static example data to the server:

```bash
python send_test_data.py
```
