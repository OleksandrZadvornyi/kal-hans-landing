# Kal-Hans Landing Page

A modern landing page for a skincare company built with **React, TypeScript, and Tailwind CSS**, powered by **Vite**. Features a **responsive design, smooth animations, and a clean, user-friendly interface** to showcase skincare products and services.

🌐 **Live Demo**: [Kal-Hans Landing Page](https://kal-hans.netlify.app/)


## 🚀 Features

- ⚡ **Blazing fast development** with Vite
- 🎨 **Tailwind CSS** for modern styling
- 🎭 **TypeScript** for better maintainability
- 📱 **Fully responsive** design
- ✨ **Smooth animations** for enhanced UX
- 🔍 **SEO-friendly** structure
- 🔥 **Deployed on Netlify** for easy access


## 🔧 Installation & Setup

### 1️⃣ Clone the repository

```sh
git clone https://github.com/your-username/kal-hans-landing.git
cd kal-hans-landing
```

### 2️⃣ Install dependencies

```sh
npm install
```

### 3️⃣ Start the development server

```sh
npm run dev
```

The app will be available at **[http://localhost:5173](http://localhost:5173)**.


## 🏗️ Building for Production

```sh
npm run build
```

The production-ready files will be generated in the `dist/` folder.


## 🛠 Expanding the ESLint Configuration

If you are developing a production application, update ESLint for type-aware rules:

- Modify `parserOptions`:
  ```js
  export default tseslint.config({
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  })
  ```
- Use `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`.
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update your `eslint.config.js`:
  ```js
  import react from 'eslint-plugin-react'
  export default tseslint.config({
    settings: { react: { version: '18.3' } },
    plugins: { react },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
    },
  })
  ```


## 🌍 Deployment

This frontend is deployed on **Netlify** at:

```
https://kal-hans.netlify.app/
```

### 🎯 Deploying Updates

1. Push your latest changes to the `main` branch.
2. Netlify will automatically build and deploy the new version.


## 🔥 Troubleshooting

**Environment Variables Not Working?**

- Ensure `.env` files are set up correctly and variables are prefixed with `VITE_`:
  ```sh
  VITE_API_URL=https://your-backend-url.com
  ```


## 📜 License

This project is licensed under the **MIT License**.
