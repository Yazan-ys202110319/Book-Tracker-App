# 📚 Book Tracker App

A modern web application for tracking your reading journey. Built with **Next.js**, **React**, **Prisma**, and **Tailwind CSS**, this app lets users create, update, and manage books across different reading statuses — making it easy to stay organized and engaged with your reading goals.

[🔗 View Repository](https://github.com/Yazan-ys202110319/Book-Tracker-App)

---

## 🚀 Features

- 📖 Add books with title, author, description, and status
- 🔄 Categorize books into:
  - **To Read**
  - **Reading**
  - **Finished**
- 🧾 View detailed information for each book
- ✏️ Edit book details
- ❌ Delete books from your tracker
- 🧩 Fully responsive UI with Tailwind CSS
- ⚡ Blazing fast CRUD operations with Prisma and Next.js API routes

---

## 🛠️ Tech Stack

| Category      | Tools Used                    |
|---------------|-------------------------------|
| Frontend      | React, Next.js, Tailwind CSS  |
| Backend       | Next.js API Routes, Prisma    |
| Database ORM  | Prisma                        |
| Styling       | Tailwind CSS                  |

---

## 📸 Screenshots

| Home Page | Book Details |
|-----------|---------------|
| ![Home Screenshot](./public/screenshots/home.png) | ![Details Screenshot](./public/screenshots/details.png) |



---

## 📂 Project Structure

```bash
Book-Tracker-App/
├── components/         # Reusable components
├── pages/              # Next.js page routes
│   ├── index.tsx       # Home page with book status categories
│   └── book/[id].tsx   # Detailed book view
├── prisma/             # Prisma schema and migration files
├── styles/             # Tailwind CSS configs
├── lib/                # Prisma client & helper functions
├── public/             # Static assets
└── README.md

```

## 🧪 Setup & Run Locally

1. Clone the repo
   ```
   git clone https://github.com/Yazan-ys202110319/Book-Tracker-App
   cd Book-Tracker-App 
   ```
2. Install dependencies
    ```
    npm install
    ```
3. Setup the database
   ```
   npx prisma migrate dev --name init
    ```
4. Start the development server
   ```
   npm run dev
    ```
5. Open ```http://localhost:3000``` to view the app.

---

## ⚙️ Environment Variables

Create a ```.env``` file in the root directory with the following:
    ```DATABASE_URL="your_postgresql_database_url"```

- Replace with your actual PostgreSQL connection string.

---

## 💡 Future Improvements
- 🔐 Add authentication

- 🏷️ Add tags or genres to books

- 📊 Add reading statistics and analytics

- ☁️ Deploy to Vercel

---

🧑‍💻 Author
- Yazan Alsaleh

    - GitHub: @Yazan-ys202110319
---
## 📄 License
This project is open-source and available under the MIT License.