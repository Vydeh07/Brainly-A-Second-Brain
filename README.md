# Brainly – A Second Brain

Effortlessly save and organize content from Twitter, YouTube, Google Docs, and more—all in one centralized place. Turn your information into actionable insights. Future-ready with powerful search and AI-driven embeddings to explore your knowledge like never before.

---

## Features

- **Save & Organize**: Store YouTube videos and Twitter posts you find interesting.
- **Instant Sharing**: Share your saved content with friends or teammates with a single click.
- **Content Filtering**: Filter your saved content by type (YouTube, Tweet).
- **Public Profiles**: Share your collection publicly with a unique link.
- **Authentication**: Secure sign up and sign in with JWT.
- **Responsive UI**: Modern, mobile-friendly design using React and Tailwind CSS.

---

## Project Structure

```
.
├── backend/
│   ├── src/
│   ├── package.json
│   └── tsconfig.json
└── frontend/
    ├── src/
    ├── public/
    ├── package.json
    └── tsconfig.json
```

---

## Getting Started

### Prerequisites

- Node.js v20+
- npm

### 1. Clone the repository

```sh
git clone https://github.com/your-username/brainly-second-brain.git
cd brainly-second-brain
```

### 2. Setup Backend

```sh
cd backend
npm install
# Copy .env.example to .env and fill in your MongoDB URI and JWT secret
npm run dev
```

The backend runs on `http://localhost:3000`.

### 3. Setup Frontend

```sh
cd frontend
npm install
npm run dev
```

The frontend runs on `http://localhost:5173`.

---

## Environment Variables

### Backend (`backend/.env`)

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Frontend (`frontend/.env`)

```
VITE_API_URL=http://localhost:3000/api/v1
```

---

## Usage

- Visit `http://localhost:5173` in your browser.
- Sign up for a new account or sign in.
- Add YouTube or Twitter links to your dashboard.
- Share your collection by toggling "Share Brain" in the sidebar.

---

## Tech Stack

- **Frontend**: React, TypeScript, Vite, Tailwind CSS
- **Backend**: Node.js, Express, TypeScript, MongoDB, Mongoose, Zod
- **Authentication**: JWT
- **Other**: Axios, CORS, dotenv

---

## Scripts

### Backend

- `npm run dev` – Build and start the backend server

### Frontend

- `npm run dev` – Start the frontend dev server
- `npm run build` – Build for production
- `npm run lint` – Lint the codebase

---

## License

MIT

---

## Credits

Made with ❤️ by Vydeh
