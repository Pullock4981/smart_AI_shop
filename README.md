# Smart AI Shop

A modern, minimal, and premium e-commerce web application built with React, Vite, Tailwind CSS, and Firebase. This project features responsive layouts, a comprehensive product catalog powered by the Fake Store API, and a secure authentication flow.

## 🚀 Tech Stack
- **Framework**: [React 19](https://react.dev/) with [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Backend / Auth**: [Firebase](https://firebase.google.com/)
- **Data Fetching**: [Axios](https://axios-http.com/)

## 📂 Folder Structure

```text
smart_shop/
├── public/                 # Public static assets
├── src/                    # Source code
│   ├── assets/             # Internal static assets
│   ├── components/         # Reusable UI components
│   │   ├── home/           # Home page specific sections (Hero, Categories, etc.)
│   │   ├── layout/         # Global layout elements (Navbar, Footer)
│   │   └── shared/         # Shared components (e.g., ProductCard)
│   ├── context/            # React Context providers (AuthContext)
│   ├── pages/              # Main page views (Home, Dashboard, Checkout, etc.)
│   ├── routes/             # Routing logic and guards (ProtectedRoute)
│   ├── services/           # External service configurations (Firebase setup)
│   ├── App.tsx             # Root application component & Route definitions
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global CSS & Tailwind directives
├── .env.example            # Example environment variables
├── package.json            # Project dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## ⚙️ Environment Setup

To run this project, you will need to add your environment variables to a `.env` file at the root of the project.

1. Copy the `.env.example` file and rename it to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Open the `.env` file and replace the placeholder values with your actual Firebase credentials. The `VITE_API_FOR_THIS_PROJECT` is already set to the free Fake Store API.

**Environment Variables Example:**
```env
VITE_FIREBASE_API_KEY="your_firebase_api_key_here"
VITE_FIREBASE_AUTH_DOMAIN="your_firebase_auth_domain_here"
VITE_FIREBASE_PROJECT_ID="your_firebase_project_id_here"
VITE_FIREBASE_STORAGE_BUCKET="your_firebase_storage_bucket_here"
VITE_FIREBASE_MESSAGING_SENDER_ID="your_firebase_messaging_sender_id_here"
VITE_FIREBASE_APP_ID="your_firebase_app_id_here"
VITE_API_FOR_THIS_PROJECT="https://fakestoreapi.com/products"
```

## 💻 Getting Started

Follow these steps to run the project locally:

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start the Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Navigate to `http://localhost:5173` in your web browser.

## 🌟 Key Features
- **Public & Protected Routes**: Secure dashboard and checkout flows guarded by Firebase authentication.
- **Dynamic Product Catalog**: Real-time fetching of products using the Fake Store API.
- **Modern UI/UX**: Premium aesthetic with micro-interactions, skeleton loaders, and responsive grid layouts.
- **Google Authentication**: Seamless one-click login using Firebase Google Auth.
