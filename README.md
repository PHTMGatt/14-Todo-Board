# Kanban Board with JWT Authentication

## Description

A full-stack Kanban board application with secure login using JSON Web Tokens (JWT). Users must log in to view and manage their tasks.

## Features

- User login and logout
- JWT-based authentication
- Protected routes
- Task board with "To Do", "In Progress", and "Done" columns

## How to Use

1. Clone the repo and install dependencies:
   ```bash
   git clone https://github.com/your-username/kanban-board-auth.git
   cd kanban-board-auth
   ```

2. Create a `.env` file in the `server/` folder:
   ```
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   JWT_SECRET=your_secret_key
   ```

3. Start the server and client:
   ```bash
   # In /server
   npm run dev

   # In /client
   npm start
   ```

4. Open your browser and log in to access the Kanban board.

## Screenshots

![Login Page](./client/src/assets/Screenshot%202025-03-31%20154333.png)  
![Kanban Board](./client/src/assets/Screenshot%202025-03-31%20154359.png)

## Deployment

Live App: [Your Render Link Here]  
GitHub Repo: [Your GitHub Link Here]
