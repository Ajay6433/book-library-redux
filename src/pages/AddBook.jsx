import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { addBook } from "../store/slice/bookSlice.jsx"; // Adjust the import path as necessary
import { useNavigate } from "react-router-dom";

function AddBook() {
    // State to manage the book form data
    const [bookForm, setBookForm] = useState({
        title: "",
        author: "",
        category: "",
        years: "",
        ratings: "",
        description: "",
        coverImage: "",
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const booksData = useSelector((state) => state.books.books) || [];

    // Function to handle the form submission
    const handleAddBook = (e) => {
        e.preventDefault();
        const newBook = {
            ...bookForm,
            _id: uuidv4(), // Generating a unique ID for the new book
            coverImage: bookForm.coverImage ? URL.createObjectURL(bookForm.coverImage) : "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=400&q=80", // Placeholder image if no cover image is provided
        };
        try {
            dispatch(addBook(newBook));
            navigate(`/book/${newBook._id}`);
        }
        catch (error) {
            console.error("Error adding book:", error);
        }
        setBookForm({
            title: "",
            author: "",
            category: "",
            years: "",
            ratings: "",
            description: "",
            coverImage: "",
        });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Add a New Book</h2>
                <form onSubmit={handleAddBook} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Title"
                        value={bookForm.title}
                        onChange={(e) => setBookForm({ ...bookForm, title: e.target.value })}
                        className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                        minLength={2}
                        maxLength={100}
                    />
                    <input
                        type="text"
                        placeholder="Author"
                        value={bookForm.author}
                        required
                        onChange={(e) => setBookForm({ ...bookForm, author: e.target.value })}
                        className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <div>
                        <label className="block text-gray-700 mb-1">Category</label>
                        <select
                            value={bookForm.category}
                            onChange={(e) => setBookForm({ ...bookForm, category: e.target.value })}
                            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        >
                            <option value="">Select Category</option>
                            {
                                booksData.length > 0 &&
                                [...new Set(booksData.map(book => book.category))].map((category, index) => (
                                    <option key={index} value={category}>
                                        {category}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                    <input
                        type="date"
                        placeholder="Published Year"
                        value={bookForm.years}
                        required
                        onChange={(e) => setBookForm({ ...bookForm, years: e.target.value })}
                        className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="number"
                        min={0}
                        max={5}
                        placeholder="Please give ratings between 0-5"
                        value={bookForm.ratings}
                        onChange={(e) => {
                            const value = e.target.value;
                            // Allow empty input (if book does not have any reviews i.e- Just launched) or numbers between 0 and 5
                            if (value === "" || (Number(value) >= 0 && Number(value) <= 5)) {
                                setBookForm({ ...bookForm, ratings: value });
                            }
                        }}
                        className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <textarea
                        placeholder="Description"
                        value={bookForm.description}
                        onChange={(e) => setBookForm({ ...bookForm, description: e.target.value })}
                        className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                        rows={3}
                    />
                    <label className="label">Cover Image</label>
                    <input

                        onChange={(e) =>
                            setBookForm({ ...bookForm, coverImage: e.target.files[0] })
                        }
                        type="file"
                        accept="image/*"
                    />
                    <button
                        type="submit"
                        onSubmit={handleAddBook}
                        className="w-full bg-blue-600 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                    >
                        Add Book
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddBook;