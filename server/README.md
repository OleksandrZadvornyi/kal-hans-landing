# Kal-Hans Backend

![Node.js](https://img.shields.io/badge/Node.js-16.x-green)
![Express](https://img.shields.io/badge/Express-4.x-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)
![Render](https://img.shields.io/badge/Deployed-Render-purple)

Backend for the **Kal-Hans Landing Page**, providing APIs for managing products, blog posts, and Instagram-style posts. Built with **Node.js, Express, TypeScript, and MongoDB**, and deployed on **Render**.

## 🚀 Features
- RESTful API with Express
- MongoDB Atlas integration via Mongoose
- TypeScript support
- CORS enabled for frontend integration
- Hosted on Render for easy deployment

## 📂 Project Structure
```
kal-hans-backend/
│── src/                    # Source code
│   ├── models/             # Mongoose models
│   ├── routes/             # Express routes
│   ├── server.ts           # Main server file
│── .env                    # Environment variables (not included in repo)
│── package.json            # Dependencies and scripts
│── tsconfig.json           # TypeScript configuration
│── README.md               # Project documentation
```

## 🔧 Installation & Setup

### 1️⃣ Clone the repository
```sh
git clone https://github.com/your-username/kal-hans-backend.git
cd kal-hans-backend
```

### 2️⃣ Install dependencies
```sh
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the root directory and add the following:
```
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<your_db_name>?retryWrites=true&w=majority
```
Replace `<username>`,`<password>` and `<your_db_name>` with your MongoDB information.

### 4️⃣ Run the server
```sh
npm run start
```
The server will start at **http://localhost:5000**.


## 📡 API Endpoints

### 🛍️ Products
| Method | Endpoint        | Description       |
| ------ | --------------- | ----------------- |
| `GET`  | `/api/products` | Get all products  |
| `POST` | `/api/products` | Add a new product |

### 📝 Blogs
| Method | Endpoint     | Description         |
| ------ | ------------ | ------------------- |
| `GET`  | `/api/blogs` | Get all blog posts  |
| `POST` | `/api/blogs` | Add a new blog post |

### 📸 Instagram Posts
| Method | Endpoint         | Description              |
| ------ | ---------------- | ------------------------ |
| `GET`  | `/api/instagram` | Get all Instagram posts  |
| `POST` | `/api/instagram` | Add a new Instagram post |


## 🌍 Deployment
This backend is deployed on **Render**. The live API URL is:

```
https://kal-hans-backend.onrender.com
```

Make sure your frontend is configured to use this URL in `.env`:

```
VITE_API_URL=https://kal-hans-backend.onrender.com
```


## 🔥 Troubleshooting

**MongoDB connection issues?**
- Ensure your **IP is whitelisted** in MongoDB Atlas.  
- If using **Render**, allow `0.0.0.0/0` in MongoDB **Network Access**.

**CORS errors?**
- Ensure your Express app is using:
  ```ts
  import cors from "cors";
  app.use(cors());
  ```


## 📜 License
This project is licensed under the **MIT License**.

