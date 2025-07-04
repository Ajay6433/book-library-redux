import BookItem from "./BookItem";

function BookList({ books }) {
    return (
        <>
            {books.length > 0 ? (
                <div className="book-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {books.map((book, index) => (
                        <BookItem key={index} book={book} />
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500 mt-8">No books available.</p>
            )}
        </>
    );
}

export default BookList;
