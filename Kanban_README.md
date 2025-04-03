
# 📌 **Kanban Board with JWT Authentication**

---

## 🔐 **Description**

A **full-stack Kanban board application** featuring secure authentication using JSON Web Tokens (JWT). Users can securely log in to view, manage, and organize their tasks seamlessly.

**🔗 [View Live Application](https://one4-todo-board.onrender.com)**

---

## 🌟 **Features**

- Secure **user authentication** (Login & Logout)
- **JWT-based** authentication ensuring protected routes
- Interactive Kanban Board with task management across three columns:
  - 📝 **To Do**
  - 🚧 **In Progress**
  - ✅ **Done**

---

## 🚀 **Getting Started**

Follow these steps to run the application locally:

### 1. **Clone the Repository**

```bash
git clone https://github.com/PHTMGatt/14-Todo-Board.git
cd 14-Todo-Board
```

### 2. **Setup Environment Variables**

Create a `.env` file inside the `server/` directory:

```
DB_USER=your_db_user
DB_PASSWORD=your_db_password
JWT_SECRET=your_secret_key
```

### 3. **Install Dependencies & Run**

Install dependencies and start the application:

```bash
# In server directory
npm install
npm run dev

# In client directory
npm install
npm start
```

### 4. **Access the App**

Open your browser at `http://localhost:3000` to log in and manage your tasks.

---

## 📸 **Screenshots**

**Login Page**

![Login Page](./client/src/assets/Screenshot%202025-03-31%20154333.png)

**Kanban Board**

![Kanban Board](./client/src/assets/Screenshot%202025-03-31%20154359.png)

---

## 🛠️ **Built With**

- **Front-end:** React, React Router, CSS
- **Back-end:** Node.js, Express, MongoDB
- **Authentication:** JSON Web Tokens (JWT)

---

## 🌐 **Deployment**

- **Live App:** [https://one4-todo-board.onrender.com](https://one4-todo-board.onrender.com)
- **GitHub Repo:** [https://github.com/PHTMGatt/14-Todo-Board](https://github.com/PHTMGatt/14-Todo-Board)

---

✨ **Happy Task Managing!** ✨
