import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function BookDetails() {
    const { id } = useParams();
    console.log("Book ID:", id);
    const booksData = useSelector((state) => state.books.books) || [];

    // Find the book with the matching ID from the booksData
    const book = useMemo(() => {
        return booksData.find((book) => book._id === id);
    }, [booksData, id]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center py-10 px-4">
            <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8">
                <h1 className="text-4xl font-extrabold mb-8 text-center text-blue-800 tracking-tight drop-shadow">
                    Book Details
                </h1>
                {book ? (
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        {book.coverImage && (
                            <img
                                src={book.coverImage}
                                alt={`${book.title} cover`}
                                className="w-40 h-60 object-cover rounded-xl shadow-lg border-4 border-blue-200"
                            />
                        )}
                        <div className="flex-1 space-y-3">
                            <h2 className="text-2xl font-bold text-gray-900">{book.title}</h2>
                            <p className="text-gray-700">
                                <span className="font-semibold text-blue-700">Author:</span> {book.author}
                            </p>
                            <p className="text-gray-700">
                                <span className="font-semibold text-blue-700">Category:</span> {book.category}
                            </p>
                            <p className="text-gray-700">
                                <span className="font-semibold text-blue-700">Ratings:</span> {book.ratings}
                            </p>
                            <p className="text-gray-700">
                                <span className="font-semibold text-blue-700">Description:</span> {book.description}
                            </p>
                            <p className="text-gray-700">
                                <span className="font-semibold text-blue-700">Published Date:</span>{" "}
                                {new Date(book.years).toLocaleDateString()}
                            </p>
                        </div>
                    </div>
                ) : (
                    <p className="text-red-500 text-center text-lg font-semibold py-8">Book not found.</p>
                )}
                <div className="flex justify-center gap-4 mt-10">
                    <Link
                        to="/browse"
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 transition-colors"
                    >
                        Back to Browse Books
                    </Link>
                    <Link
                        to="/"
                        className="bg-gray-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-gray-700 transition-colors"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}   
export default BookDetails;