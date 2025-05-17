# 🔐 MERN Authentication System

A full-stack login and registration system using **React.js (Vite)**, **Node.js**, **Express.js**, and **MongoDB**. The system supports JWT authentication and features a protected, styled dashboard.

---

## 📁 Folder Structure

/
├── backend/ # Node.js + Express API
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ ├── app.js # Main server file (runs on port 8000)
│ └── .env # Contains MongoDB URI and JWT secret
├── frontend/ # React (Vite) frontend
│ ├── public/
│ ├── src/
│ ├── index.html
│ ├── vite.config.js
│ └── package.json


---

## 🚀 Features

- User **Registration** and **Login** with input validation
- **JWT-based Authentication** stored in `localStorage`
- **Protected Dashboard** with user info table
- Logout functionality
- Separate **frontend and backend** structure

---

## 🧰 Tech Stack

- **Frontend**: React.js (Vite), CSS
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Authentication**: JWT, bcryptjs

---

## 🛠️ Setup Instructions

### 🔙 Backend

1. Go to the `backend` directory:

```bash
cd backend
Install dependencies:

bash
Copy
Edit
npm install
Create a .env file inside the backend folder:

env
Copy
Edit
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Start the backend server on port 8000:

bash
Copy
Edit
node app.js
The backend runs at: http://localhost:8000

🌐 Frontend
Go to the frontend directory:

bash
Copy
Edit
cd frontend
Install frontend dependencies:

bash
Copy
Edit
npm install
Start the frontend (Vite) development server:

bash
Copy
Edit
npm run dev
The frontend runs at: http://localhost:5173 (default Vite port)

Make sure Axios requests in frontend point to http://localhost:8000.

📡 API Endpoints
Method	Route	Description
POST	/api/register	Register a new user
POST	/api/login	Login a user
GET	/api/users	Get all users

🧪 UI Overview
Dark-themed login & registration form

Protected dashboard with user list

Status indicators (Active, Inactive, Suspended)

Logout button for session management