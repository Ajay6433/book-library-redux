import { useParams } from "react-router-dom";
import Categories from "../components/Categories.jsx";
import { useMemo, useState } from "react";
import BookList from "../components/BookList";
import { CiSearch } from "react-icons/ci";
import { useSelector } from "react-redux";

function BrowseBooks() {
    // Extracting the category from the URL parameters
    const { category } = useParams();
    const [search, setSearch] = useState("");

    // Fetching books data from the Redux store
    const booksData = useSelector((state) => state.books.books) || [];

    // Filtering books based on the selected category
    const filteredBooks = useMemo(() => {
        if (!category) return booksData;
        return booksData.filter((book) => book.category === category);
    }, [booksData, category]);

    // Searching books based on title or author
    // If search is empty, it returns the filtered books
    const searchedBooks = useMemo(() => {
        if (!search) return filteredBooks;
        return filteredBooks.filter((book) =>
            book.title.toLowerCase().includes(search.toLowerCase()) ||
            book.author.toLowerCase().includes(search.toLowerCase())
        );
    }, [filteredBooks, search]);

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 md:px-12">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2 md:mb-0">
                        Browse Books
                    </h1>
                    <div className="relative w-full md:w-96">
                        <input
                            type="text"
                            placeholder="Search books..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors bg-white"
                        />
                        <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-xl text-gray-400" />
                    </div>
                </div>
                <div className="mb-8">
                    <Categories />
                </div>
                <div>
                    <BookList books={searchedBooks} />
                    {filteredBooks.length === 0 && (
                        <p className="text-center text-gray-500 mt-8 text-lg">
                            No books available in this category.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default BrowseBooks;