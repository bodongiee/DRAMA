# DRAMA (Dashboard for Robotic Arm & Manipulator Admin)
The frontend is built with Svelte (Vite), and the backend uses Python FastAPI.

---

## How to run for Development (Development Mode)

Run the frontend and backend servers separately to enable Hot Module Replacement (HMR), which automatically reloads the browser whenever the code is modified.

### 1. Run Backend Server
Open a terminal and run the FastAPI server from the root directory.
```bash
cd /Users/bosung/Desktop/DRAMA
python server.py
```
> The backend runs on `http://localhost:1111` and handles `WebSocket(/ws)` connections and serving robot assets.

### 2. Run Frontend Development Server
Open a new terminal, navigate to the `frontend` folder, and run the server.
```bash
cd /Users/bosung/Desktop/DRAMA/frontend
npm install
npm run dev
```
> Access the address displayed in the terminal (e.g., `http://localhost:5173`) in your browser to view and develop the application.

---

## How to Run after Build (Production Mode)

This method optimizes (minifies) the code after development is complete and serves it through a single Python server.

```bash
# 1. Navigate to the frontend folder and create a production build (creates the frontend/dist folder)
cd /Users/bosung/Desktop/DRAMA/frontend
npm run build

# 2. Return to the root folder and run the integrated backend server
cd ..
python server.py
```

Open your browser and navigate to **`http://localhost:1111`** to use the final built web page.