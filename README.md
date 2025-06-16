# 🍔 Food-App (Backend)
 
A fully functional backend for a food delivery application built with **Node.js**, **Express.js**, and **MongoDB**. This project provides core API functionality for authentication, category management, and admin control. A React.js frontend is planned and will be integrated soon.

## 🚀 Features

- 🔐 **Authentication & Authorization**
  - JWT-based user authentication
  - Secure login and registration endpoints
  - Middleware-protected routes

- 👤 **Role-based Access**
  - Admin-only privileges for category management and order status modification
  - Middleware verification for protected actions

- 📦 **Category Management**
  - Admins can create and manage food categories
  - MongoDB schema for food category data

- 🧩 **Modular and Scalable Codebase**
  - Well-organized folder structure for models, middlewares, routers and controllers
  - Easy to integrate with any frontend (React.js planned)

## 📌 Notes
- This is backend only. Frontend (with React.js) will be integrated soon.

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

```
## 🛠️ Technologies Used
- Node.js

- Express.js

- MongoDB (via Mongoose)

- JWT for authentication

- dotenv for environment configuration 

 ## 🧪 API Endpoints

| Method | Endpoint           | Description                       | Access |
| ------ | ------------------ | --------------------------------- | ------ |
| POST   | `/register`        | Register a new user               | Public |
| POST   | `/login`           | Authenticate a user and get token | Public |
| POST   | `/createCategory` | Create a new food category        | Admin  |
| POST   | `/orderStatus` | Change food order status        | Admin  |


## Installation
```bash
# Clone the repository
git clone https://github.com/sajal-pakira/Food-App.git
cd Food-App

# Install backend dependencies
npm install

# Create a .env file in the root directory with the following variables:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

# Start the server
npm start
```
## ✍️ Author
**Sajal Pakira**
