# 🚗 CarSnap - Buy & Sell Cars Like Instagram

CarSnap is a full-stack web app where users can post, edit, and delete car listings — similar to how Instagram works, but focused on car sales. Built with Express.js, MongoDB, and JSX views using the MVC architecture.

<img width="1466" height="880" alt="Screenshot 2025-08-07 at 10 16 13 AM" src="https://github.com/user-attachments/assets/8b2ca813-6781-4dd2-b352-631b721fabf0" />

---

## 📦 Tech Stack

- Express.js
- MongoDB & Mongoose
- JSX View Engine
- MVC Pattern
- JWT Authentication
- Method-Override
- CSS (custom or Bootstrap)
- Jest + Supertest for testing

---

## 🧠 Features

- Sign up & log in (JWT Auth)
- Create, edit, and delete car posts
- Browse all cars
- Filter/search by brand, model, price
- Responsive & clean design
- API routes for mobile apps

---

## 🗃️ Models

### 🚘 Car Model

| Field       | Type     | Description              |
|-------------|----------|--------------------------|
| make        | String   | Brand (e.g., Toyota)     |
| model       | String   | Model (e.g., Corolla)    |
| year        | Number   | Manufacture year         |
| price       | Number   | Sale price               |
| image       | String   | Image URL                |
| description | String   | Car details              |
| owner       | ObjectId | Reference to Author      |

### 👤 Author Model

| Field     | Type   | Description                |
|-----------|--------|----------------------------|
| username  | String | Unique username            |
| email     | String | Email address              |
| password  | String | Hashed password            |

---

## 🔐 Authentication Routes

| Method | Route            | Description          |
|--------|------------------|----------------------|
| GET    | `/auth/signup`   | Show sign-up form    |
| POST   | `/auth/signup`   | Create user          |
| GET    | `/auth/login`    | Show login form      |
| POST   | `/auth/login`    | Authenticate user    |
| POST   | `/auth/logout`   | Logout user          |

---

## 🚘 Car Routes

| Method | Route            | Action        | Description                   |
|--------|------------------|---------------|-------------------------------|
| GET    | `/cars`          | index         | Show all car listings         |
| GET    | `/cars/new`      | new           | Form to create new car        |
| POST   | `/cars`          | create        | Add new car to DB             |
| GET    | `/cars/:id`      | show          | Show one car in detail        |
| GET    | `/cars/:id/edit` | edit          | Edit car form                 |
| PUT    | `/cars/:id`      | update        | Update car details            |
| DELETE | `/cars/:id`      | delete        | Remove car from DB            |

---

## 🔄 API Routes (for mobile integration)

| Method | Route            | Description              |
|--------|------------------|--------------------------|
| GET    | `/api/cars`      | JSON of all cars         |
| POST   | `/api/cars`      | Create new car (API)     |
| GET    | `/api/cars/:id`  | JSON of one car          |
| PUT    | `/api/cars/:id`  | Update car (API)         |
| DELETE | `/api/cars/:id`  | Delete car (API)         |

---

## 🧪 Testing

Run tests with:

```bash
npm test
