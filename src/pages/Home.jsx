import { useMemo } from "react";
import { useSelector } from "react-redux";
import BookList from "../components/BookList";
import Categories from "../components/Categories";

function Home() {
    const RATING_THRESHOLD = 4.5; // Example threshold for high-rated books
    const booksData = useSelector((state) => state.books.books) || [];

    // Filter books based on the rating threshold
    const highRatedBooks = useMemo(() => {
        return booksData.filter(book => book.ratings >= RATING_THRESHOLD);
    }, [booksData]);


    return (
        <div className="p-6">
            <h1 className="text-3xl text-center font-bold mb-6">Welcome to the Home Page</h1>
            <p className="text-lg text-center fontreguler mb-6">Explore a world of books, discover new favorites, and share your own recommendations. Your next great read is just a click away!</p>
            <Categories />
            {/* Passing filtered book based on their ratings to show on the UI */}
            <BookList books={highRatedBooks} />
        </div>
    );
}

export default Home;