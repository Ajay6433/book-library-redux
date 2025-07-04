# Online Library System

This is a modern online library system built with React, Redux Toolkit, and Tailwind CSS. It allows users to browse, add, and view details of books in a visually appealing and user-friendly interface.

## Features

- **Home Page:**
  - Welcoming introduction and a list of top-rated books (rating ≥ 4.5).
  - Categories section for easy navigation by book genre/category.

- **Navigation Bar:**
  - Quick links to Home, Browse Books, and Add Book pages.

- **Browse Books:**
  - View all books or filter by category.
  - Click on a book to view detailed information.

- **Add Book:**
  - Add a new book with fields for title, author, category, published year, ratings, description, and cover image.]
  - Cover image upload supports only image files and displays a preview.
  - After adding, redirects to the new book's details page.

- **Book Details:**
  - View all information about a selected book, including cover image, author, category, ratings, description, and published date.
  - Easy navigation back to browse or home.

- **State Management:**
  - Uses Redux Toolkit for managing books and categories.
  - Books can be fetched from a backend or added locally.

- **Styling:**
  - Fully responsive and styled with Tailwind CSS for a clean, modern look.
  - Consistent green color palette for a calm, library-inspired UI/UX.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
3. **Open your browser:**
   Visit `http://localhost:5173` (or the port shown in your terminal).

## Folder Structure

- `src/components/` — Reusable UI components (Navigation, Categories, BookList, etc.)
- `src/pages/` — Main pages (Home, BrowseBooks, AddBook, BookDetails, NotFound)
- `src/store/` — Redux store and slices
- `public/` — Static assets
