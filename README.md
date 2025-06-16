# 🍔 Food-App (Backend)
 
A fully functional backend for a food delivery application built with **Node.js**, **Express.js**, and **MongoDB**. This project provides core API functionality for authentication, category management, and admin control. A React.js frontend is planned and will be integrated soon.

## 🚀 Features

- 🔐 **Authentication & Authorization**
  - JWT-based user authentication
  - Secure login and registration endpoints
  - Middleware-protected routes

- 👤 **Role-based Access**
  - Admin-only privileges for category management
  - Middleware verification for protected actions

- 📦 **Category Management**
  - Admins can create and manage food categories
  - MongoDB schema for food category data

- 🧩 **Modular and Scalable Codebase**
  - Well-organized folder structure for models, middlewares, and controllers
  - Easy to integrate with any frontend (React.js planned)

## 📌 Notes
- This is backend only. Frontend (built with React.js) will be integrated soon.

- All protected routes require a valid JWT token in headers.

## 📂 Project Structure

```bash
Final FOOD APP/
│
├── middlewares/               # Custom Express middlewares
│   ├── admin.middleware.js
│   └── auth.middleware.js
│
├── models/                    # Mongoose schemas
│   └── category.model.js
│
├── .env                       # Environment variables (excluded from Git)
├── .gitignore                 # Ignored files and folders
├── config.yml                 # Additional configuration (if used)
├── package.json               # NPM dependencies and scripts
├── server.js                  # Entry point of the Express app
└── README.md                  # Project documentation
