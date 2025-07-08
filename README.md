🔐 Login & Registration App with Dashboard

🛠 Tech Stack
🖥️ Frontend:
* React.js (Vite)
* React Router DOM
* CSS3
* LocalStorage

Backend:-

* Node.js
* Express.js
* MongoDB
* JWT for Auth
* bcrypt for password hashing

🚀 Getting Started
1. Clone the repo

* git clone https://github.com/parasmittal05/login-register.git
* cd login-register


2. Install Dependencies


# Frontend

* npm install
* npm run dev

# Backend

* cd server
* npm install
* npm run server

3. Environment Variables

Create a .env file in the /server directory:


* MONGODB_URI=your_mongodb_connection_string
* JWT_SECRET=your_jwt_secret
* PORT=5001


📡 API Routes
* Method	Endpoint	Description
* POST	/api/auth/register	Register a new user
* POST	/api/auth/login	Login existing user

✨ Features

🔐 Authentication
* JWT token storage

* Bcrypt password hashing

"Remember Me" checkbox

Protected routes

📊 Dashboard
Welcome user info from localStorage

Search/filter users

Color-coded statuses

Pagination UI

🧾 Forms
Error handling & validation

Clean UI with icons



👤 Author
Paras Mittal
