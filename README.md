# Course Selling App

A full-stack web application where admins can create and manage courses, and users can browse, purchase, and access their bought courses.

## Live Demo

- **Frontend:** `coming soon`
- **Backend API:** `coming soon`

---

## Tech Stack

**Backend**
- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication (separate secrets for admin and user)
- bcrypt for password hashing

**Frontend**
- Vanilla HTML, CSS, JavaScript
- Axios for API calls
- Deployed on Vercel

---

## Features

**Admin**
- Sign up / Sign in
- Create courses (title, description, price, image)
- View all courses they've created

**User**
- Sign up / Sign in
- Browse all available courses
- Purchase courses
- View purchased courses on dashboard

---

## Project Structure

```
Course-Selling-App/
├── backend/
│   ├── index.js
│   ├── db.js
│   ├── Router/
│   │   ├── admin.js
│   │   ├── user.js
│   │   └── course.js
│   └── middleware/
│       ├── authAdmin.js
│       └── authUser.js
└── frontend/
    ├── HTML/
    │   ├── admin-signUp.html
    │   ├── admin-signIn.html
    │   ├── admin-dashboard.html
    │   ├── user-signUp.html
    │   ├── user-signIn.html
    │   ├── user-dashboard.html
    │   └── course.html
    ├── JS/
    │   ├── admin-signUp.js
    │   ├── admin-signIn.js
    │   ├── admin-dashboard.js
    │   ├── user-signUp.js
    │   ├── user-signIn.js
    │   ├── user-dashboard.js
    │   └── course.js
    └── CSS/
        └── style.css
```

---

## Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` folder:

```env
MONGO_URI=your_mongodb_connection_string
JWT_ADMIN_PASSWORD=your_admin_jwt_secret
JWT_USER_PASSWORD=your_user_jwt_secret
PORT=3000
```

Start the server:

```bash
npm run dev
```

### Frontend Setup

Open any HTML file directly in the browser via Live Server, or deploy the `frontend/` folder to Vercel.

---

## API Reference

### Admin Routes — `/api/v1/admin`

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/signUp` | No | Register admin |
| POST | `/signIn` | No | Login, returns token |
| POST | `/course` | Yes | Create a course |
| PUT | `/course` | Yes | Update a course |
| GET | `/course/bulk` | Yes | Get all admin's courses |

### User Routes — `/api/v1/user`

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/signup` | No | Register user |
| POST | `/signin` | No | Login, returns token |
| GET | `/purchase` | Yes | Get purchased courses |

### Course Routes — `/api/v1/course`

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/preview` | No | Get all courses |
| POST | `/purchase` | Yes | Purchase a course |

> Auth token is sent as a request header: `token: <your_jwt_token>`

---

## Author

**Mohd Ayaz Saifi**
- GitHub: [@Ayazzsaifi](https://github.com/Ayazzsaifi)
- LinkedIn: [mohd-ayaz-59b142253](https://linkedin.com/in/mohd-ayaz-59b142253)