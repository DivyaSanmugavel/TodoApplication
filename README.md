# 📝 Todo Application

A full-stack **Todo Application** built to manage daily tasks efficiently. This project demonstrates CRUD operations with a modern tech stack, combining a responsive React frontend with a Node.js + Express backend and MongoDB for data persistence.

---

## 🚀 Features

* ➕ Add new tasks
* ✏️ Edit existing tasks
* ✅ Mark tasks as completed
* 🗑️ Delete tasks
* 📋 View all tasks in an organized list
* 💾 Persistent data storage using MongoDB
* 🎨 Clean and responsive UI using CSS

---

## 🛠️ Tech Stack

### Frontend

* **React.js** – Component-based UI
* **JavaScript (ES6+)** – Application logic
* **CSS** – Styling and layout

### Backend

* **Node.js** – JavaScript runtime
* **Express.js** – RESTful API framework

### Database

* **MongoDB** – NoSQL database for storing todos

---

## 📂 Project Structure

```
Todo-App/
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── index.html
│   │   └── styles.css
|   |   └── main.jsx
|   |   └── App.css
│   └── package.json
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── models/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

### Prerequisites

* Node.js
* MongoDB (local or Atlas)
* npm or yarn

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/todo-app.git
cd todo-app
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Run the backend server:

```bash
npm start
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend runs on:

```
http://localhost:3000
```

Backend runs on:

```
http://localhost:5000
```

---

## 🔌 API Endpoints

| Method | Endpoint       | Description       |
| ------ | -------------- | ----------------- |
| GET    | /api/todos     | Get all todos     |
| POST   | /api/todos     | Create a new todo |
| PUT    | /api/todos/:id | Update a todo     |
| DELETE | /api/todos/:id | Delete a todo     |

---

## 🎯 Future Enhancements

* 🔐 User authentication (JWT)
* 🕒 Due dates & reminders
* 🔍 Search and filter tasks
* 🌙 Dark mode
* 📱 Mobile-friendly improvements

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👤 Author

**Divya**
Built with ❤️ using React, Node.js, Express, and MongoDB

---

✨ Happy Coding! ✨
