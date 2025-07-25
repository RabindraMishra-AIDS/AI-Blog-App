# 📰 Dainik - AI-Powered Blog Website

**Dainik** is a full-featured, user-friendly blog website with integrated AI capabilities. It allows users to read and search blogs in categories like **Technology**, **Finance**, **Startups**, and **Lifestyle**, and empowers admins with full content control. The platform includes an AI tool to assist in content creation, making blogging smarter and faster.

---

## 📖 Description

Dainik offers:
- A beautiful and responsive blog reading experience.
- AI-powered content generation using Google Generative AI.
- A dedicated admin panel with full CRUD operations for blogs and comments.
- Rich blog editing with image uploads.
- Smooth navigation and blog search for readers.

Both users and admins enjoy a clean, intuitive interface optimized with modern design principles and animations.

---

## 🛠️ Tech Stack

### Frontend (Client)
- **React 19**
- **Tailwind CSS**
- **Vite**
- **Axios**
- **Framer Motion**
- **React Router DOM**
- **Quill (Rich Text Editor)**
- **Marked**
- **Moment.js**
- **React Icons**
- **React Hot Toast**

### Backend (Server)
- **Node.js (ESM)**
- **Express 5**
- **MongoDB & Mongoose**
- **JWT (Authentication)**
- **dotenv**
- **multer (File Uploads)**
- **ImageKit (Image Hosting)**
- **Google GenAI SDK**
- **CORS**

---

## ✨ Features

### 👨‍💻 User Features
- Browse blogs by category (Technology, Finance, Startups, Lifestyle)
- Live keyword-based search
- Read blogs in markdown format
- Post comments on blogs
- Fully responsive and clean design

### 🛠️ Admin Features
- Secure admin panel
- Add, delete, and unpublish blogs
- Approve or delete user comments
- Dashboard overview of blogs and comments
- Upload images for blog content

### 🤖 AI Features
- Auto-generate blog titles and content using Google GenAI

---

## 📦 Packages Overview

### Server-side (`/server/package.json`)

| Package             | Description |
|---------------------|-------------|
| `express`           | Web framework for building APIs and routes |
| `mongoose`          | ODM for MongoDB for structured schemas |
| `jsonwebtoken`      | Used for authentication with JWTs |
| `dotenv`            | Loads environment variables from `.env` file |
| `cors`              | Enables Cross-Origin Resource Sharing |
| `multer`            | Handles file/image uploads from forms |
| `imagekit`          | Image CDN and storage API |
| `@google/genai`     | Connects to Google’s Generative AI API |

### Client-side (`/client/package.json`)

| Package               | Description |
|------------------------|-------------|
| `react`, `react-dom`   | Core React libraries for building UI |
| `tailwindcss`          | Utility-first CSS for fast and clean styling |
| `axios`                | HTTP client to connect frontend to backend |
| `quill`                | Rich text editor for blog creation |
| `marked`               | Converts markdown to HTML |
| `framer-motion`        | Adds smooth animations to UI components |
| `react-router-dom`     | Routing library for navigating pages |
| `react-hot-toast`      | Adds beautiful toast messages |
| `moment`               | Formats dates/timestamps for blogs |
| `react-icons`          | Icon library for UI elements |

---

## ⚙️ Setup and Installation

Follow these steps to run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/dainik.git
cd dainik

cd server
npm install
cp .env.example .env   # Fill in your MongoDB URI, JWT secret, ImageKit keys, etc.
npm run server

cd ../client
npm install
npm run dev
