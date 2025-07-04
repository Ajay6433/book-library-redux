import { Link } from "react-router-dom";

function BookItem({ book }) {
    return (
        <div className="book-item bg-white shadow-md rounded-lg p-6 mb-6 flex flex-col gap-4">
            {book.coverImage && (
                <img
                    src={book.coverImage}
                    alt={`${book.title} cover`}
                    className="w-32 h-48 object-cover rounded self-center mb-2 shadow"
                />
            )}
            <h2 className="text-xl font-bold text-gray-800">{book.title}</h2>
            <p className="text-gray-600"><span className="font-semibold">Author:</span> {book.author}</p>
            <p className="text-gray-600"><span className="font-semibold">Category:</span> {book.category}</p>
            <p className="text-gray-600"><span className="font-semibold">Ratings:</span> {book.ratings}</p>
            {/* Redirecting to the particular book using it's ID */}
            <Link to={`/book/${book._id}`} className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-center">
                View Details
            </Link>
        </div>
    );
}

export default BookItem;