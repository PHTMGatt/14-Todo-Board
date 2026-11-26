# Kanban Board

Plan. Track. Ship. A full-stack Kanban board for creating, editing and moving tasks across To Do, In Progress and Done.

[![Live demo](https://img.shields.io/badge/live%20demo-online-2ea44f)](https://one4-todo-board.onrender.com)

![Kanban Board with tasks in three columns](docs/screenshot.png)

---

## Status

Checked 2026-11-26 on Windows with Node 26. `npm install`, `npm run build` and the client lint pass, and `npm start` answers HTTP 200 on the app page. The board was not clicked through in a browser. No test suite.

## 🔐 **Description**

A **full-stack Kanban board application** for viewing, creating, editing and moving tasks. It began as a JWT-auth exercise; the live demo now runs without a database and saves tickets in your browser.

**🔗 [View Live Application](https://one4-todo-board.onrender.com)**

---

## 🌟 **Features**

- Interactive Kanban Board with task management across three columns:
  - 📝 **To Do**
  - 🚧 **In Progress**
  - ✅ **Done**

---

## 🚀 **Getting Started**

Requires **Node.js 22+**. No database and no `.env` are needed: the board keeps tickets in the browser's `localStorage` (seeded with demo tickets on first load), and the Express server only serves the built React app.

### 1. **Clone the Repository**

```bash
git clone https://github.com/PHTMGatt/14-Todo-Board.git
cd 14-Todo-Board
```

### 2. **Install Dependencies**

Run this once from the repo root. Its `install` script also installs `server/` and `client/`.

```bash
npm install
```

### 3. **Run It**

**Production-style (one server):**

```bash
npm run build     # builds client/dist and compiles the server to server/dist
npm start         # serves the app at http://localhost:3001 (set PORT to change it)
```

**Development (hot reload):**

```bash
npm run start:dev
```

This runs the server on port 3001 (nodemon) and the Vite dev server on `http://localhost:3000`, which opens in your browser.

### 4. **Scripts**

| Command | What it does |
| --- | --- |
| `npm run build` | Build client and server |
| `npm start` | Serve the built app on `PORT` (default 3001) |
| `npm run start:dev` | Server + Vite dev server together |
| `cd client && npm run lint` | ESLint the client |

There is no test suite. CI (`security-low`) runs a secrets scan, `npm audit` and the build on every pull request.

> **Note:** the Login page is a leftover from the original JWT version. The server no longer exposes `/auth/login`, so logging in does nothing; the board works without it. The old Sequelize models, controllers and seeds were removed along with their dependencies; `server/db/schema.sql` is kept only as a reference.

---

## 📸 **Screenshots**

**Login Page**

![Login Page](./client/src/assets/Screenshot%202025-03-31%20154333.png)

**Kanban Board**

![Kanban Board](https://raw.githubusercontent.com/PHTMGatt/12-React-Portfolio/main/src/assets/photos/Kanban.png)

---

## 🛠️ **Built With**

- **Front-end:** React, React Router, CSS
- **Back-end:** Node.js, Express 5 (static hosting for the built client)
- **Storage:** browser `localStorage`
- **Build:** Vite, TypeScript

---

## 🌐 **Deployment**

- **Live App:** [https://one4-todo-board.onrender.com](https://one4-todo-board.onrender.com)
- **GitHub Repo:** [https://github.com/PHTMGatt/14-Todo-Board](https://github.com/PHTMGatt/14-Todo-Board)

---

✨ **Happy Task Managing!** ✨
