# Task Manager Frontend

Frontend for the **Task Manager application** built with **React + Vite + TailwindCSS**.

The application allows users to manage tasks visually with a modern interface.

---

## 🚀 Features

* Add tasks
* View tasks
* Task status management
* Task details modal
* Task progress tracking
* Responsive UI
* Modern dark design

---

## 🛠️ Tech Stack

* React
* Vite
* TailwindCSS
* JavaScript
* Docker

---

## 📂 Project Structure

```
task-api-frontend
│
├── components
│   ├── Header
│   ├── Footer
│   ├── TaskCard
│   ├── TaskForm
│   ├── TaskDetailsModal
│   └── ProgressBar
│
├── services
│   └── taskService.js
│
└── App.jsx
```

---

## ⚙️ Environment variables

Create a `.env` file:

```
VITE_API_URL=http://localhost:9000/api/tasks
```

---

## ▶️ Run locally

### 1️⃣ Install dependencies

```
npm install
```

### 2️⃣ Run development server

```
npm run dev
```

Application runs on:

```
http://localhost:5173
```

---

## 🐳 Run with Docker

Build the image:

```
docker build -t task-frontend .
```

Run container:

```
docker run -p 3000:80 task-frontend
```

---

## 🔗 Backend API

The frontend communicates with the backend API:

```
http://localhost:9000/api/tasks
```

---

## 🎨 UI Features

* Dark mode design
* Animated progress bar
* Task status badges
* Dropdown actions menu
* Responsive layout

---

## 📸 Preview

Task manager dashboard with:

* task cards
* progress tracking
* interactive menus
* modal forms

---

## 📜 License

MIT License
