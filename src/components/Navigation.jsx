import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 py-4 shadow-md border-b border-blue-700">
            <ul className="flex gap-8 justify-center list-none">
                <li>
                    <Link to="/" className="text-white text-lg font-bold px-4 py-2 rounded-lg hover:bg-white hover:text-blue-700 transition-colors duration-200">Home</Link>
                </li>
                <li>
                    <Link to="/browse" className="text-white text-lg font-bold px-4 py-2 rounded-lg hover:bg-white hover:text-blue-700 transition-colors duration-200">Browse Books</Link>
                </li>
                <li>
                    <Link to="/add" className="text-white text-lg font-bold px-4 py-2 rounded-lg hover:bg-white hover:text-blue-700 transition-colors duration-200">Add Book</Link>
                </li>
            </ul>
        </nav>
    );
}
export default Navigation;