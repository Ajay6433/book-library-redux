
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setBooks } from "./store//slice/bookSlice.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import BrowseBooks from "./pages/BrowseBooks.jsx";
import AddBook from "./pages/AddBook.jsx";
import BookDetails from "./pages/BookDetails.jsx";
import NotFound from "./pages/NotFound .jsx";
import RootLayout from "./layout/RootLayout.jsx";
import Loader from "./components/Spinner.jsx";


function App() {
  const dispatch = useDispatch();
  const baseURL = 'https://books-backend-0qxz.onrender.com/api/getAllBooks';
  const [isLoading, setIsLoading] = useState(true);

  // Fetch books from the API and dispatch to Redux store
  const fetchBooks = useCallback(
    async function fetchData() {
      setIsLoading(true);
      try {
        const result = await axios.get(baseURL);
        dispatch(setBooks(result.data.Books));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    },
    [dispatch, baseURL]
  );

  // Fetch books when the component mounts
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  const booksData = useSelector((state) => state.books.books);
  console.log(booksData);
  return (
    <BrowserRouter>
      <Routes>
        {/* Root Layout for consistent navigation and layout */}
        <Route path="/" element={<RootLayout />}>
          <Route index element={isLoading ? <Loader /> : <Home />} />
          {/* Browser Layout for rendering the browse books page */}
          <Route path="browse" element={<BrowseBooks />} >
            <Route index element={<BrowseBooks />} />
            <Route path=":category" element={<BrowseBooks />} />
          </Route>
          {/* Add Book page */}
          <Route path="add" element={<AddBook />} />
          {/* Book Details page */}
          <Route path="book/:id" element={<BookDetails />} />
          {/* Not Found page */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;