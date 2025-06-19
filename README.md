# 🧠 Brainly – A Second Brain

**Brainly** is a Second Brain app designed to help you collect and organize content from different sources like **Twitter**, **YouTube**, and more—all in one place. The goal is to centralize knowledge and make it easily accessible and shareable.

> 👤 Built entirely by **Vydeh Nambiar**

---

## 🚀 Tech Stack

- **Frontend:** React (Vite) + TypeScript + Tailwind CSS  
- **Backend:** Node.js + Express.js  
- **Database:** MongoDB (Mongoose)  
- **Authentication:** JSON Web Token (JWT)  
---

## 📌 Features

- ✅ User Authentication (JWT-based)
- ✅ Add content from Twitter & YouTube
- ✅ MongoDB for persistent data storage
- ✅ Secure backend APIs
- ✅ Responsive UI with TailwindCSS
- ✅ Shareable content links

---

## 📂 Folder Structure

Brainly/
├── backend/ # Express.js backend
│ ├── routes/ # API routes
│ ├── middleware/ # Auth middleware
│ ├── models/ # Mongoose schemas
│ └── index.ts # Server entry
│
├── frontend/ # React frontend
│ └── src/
│ ├── pages/ # Auth, Dashboard, Landing
│ ├── components/ # Reusable UI
│ ├── utils/ # API calls & helpers
│ └── App.tsx # Main app component
│
├── .env # Environment variables
├── package.json # Project metadata
└── README.md # Documentation

yaml
Copy
Edit

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Vydeh07/Brainly-A-Second-Brain
cd Brainly-A-Second-Brain
2️⃣ Set Up the Backend
cd backend
npm install
Create a .env file in /backend:
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret
Start the backend server:
npm run dev
3️⃣ Set Up the Frontend
cd ../frontend
npm install
npm run dev
If needed, add .env in /frontend:
VITE_API_URL=http://localhost:3000/api

🔑 API Endpoints
🔐 Auth Routes
Method	Endpoint	Description
POST	/api/signup	Register a user
POST	/api/signin	Login user

📥 Content Routes
Method	Endpoint	Description
GET	/api/content	Fetch all content
POST	/api/content	Add new content
DELETE	/api/content/:id	Delete by ID

🔗 Sharing Routes
Method	Endpoint	Description
POST	/api/share	Share selected content
GET	/api/share/:id	View shared content

🔮 Future Enhancements
🔍 AI-powered search through content

📝 Google Docs and Medium integrations

🎨 Polished UI with animations and themes

🤝 Contributing
Contributions are welcome! Please open issues or submit pull requests.

📄 License
This project is licensed under the MIT License.
Feel free to use, distribute, and modify it as per the license terms.

Made with ❤️ by Vydeh Nambiar

Let me know if you'd like a matching `LICENSE` file (MIT) or a custom GitHub banner!








