import { useSelector } from "react-redux";
import { useMemo } from "react";
import { Link } from "react-router-dom";
function Categories() {

  // Selecting books data from Redux store
  const booksData = useSelector((state) => state.books.books) || [];

  // Extracting unique categories from books data
  const categories = useMemo(() => {
    return booksData.reduce((acc, book) => {
      if (!acc.includes(book.category)) {
        acc.push(book.category);
      }
      return acc;
    }, []);
  }, [booksData]);

  return (
    <div className="categories p-6 mb-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Categories</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {categories.map((category) => (
          <Link to={`/browse/${category}`} key={category}>
            <li
              className="bg-blue-100 text-blue-800 px-4 py-3 rounded-lg text-lg font-medium flex items-center justify-center shadow-sm hover:bg-blue-200 transition"
            >
              {category}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Categories;