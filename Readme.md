# ChatApp

A modern, full-stack real-time chat application built with **React**, **Express**, **MongoDB**, and **Socket.io**.  
Features a beautiful glassmorphic UI, authentication, live messaging, and more.

---

## Features

- 🔒 **Authentication** (Sign up, Login, JWT-based)
- 💬 **Real-time Messaging** (Socket.io)
- 🟢 **Online Status** indicators
- 👤 **User Avatars** and gender selection
- 🔍 **Search Conversations**
- 🌙 **Modern, glassy UI** (Tailwind CSS)
- 📱 **Responsive Design**
- 🧑‍💻 **React Hooks** and **Zustand** for state management

---

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, Zustand, React Router
- **Backend:** Node.js, Express, MongoDB, Mongoose, Socket.io, JWT, bcryptjs
- **Dev Tools:** Nodemon, dotenv

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/chat-app.git
cd chat-app
```

### 2. Install dependencies

```bash
npm install
cd frontend
npm install
cd ..
```

### 3. Set up environment variables

Create a `.env` file in the root and in `/frontend` as needed.

**Backend `.env` example:**
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

**Frontend `.env` example (if needed):**
```
VITE_API_URL=http://localhost:5000
```

### 4. Start the development servers

**Start backend:**
```bash
npm run server
```

**Start frontend:**
```bash
cd frontend
npm run dev
```

---

## Project Structure

```
chat-app/
│
├── backend/
│   ├── server.js
│   ├── models/
│   ├── routes/
│   └── controllers/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── zustand/
│   │   └── App.jsx
│   └── index.css
│
├── package.json
└── README.md
```

---

## Scripts

- `npm run server` — Start backend with nodemon
- `npm start` — Start backend with node
- `npm run build` — Install dependencies and build frontend

---

## Screenshots

![ChatApp Screenshot](./screenshot.png)

---

## License

This project is licensed under the ISC License.

---

## Credits

Made with ❤️ by [PrathamGupta]