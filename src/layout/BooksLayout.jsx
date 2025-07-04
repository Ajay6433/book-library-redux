import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

function BooksLayout(){
    return(
        <>
            {/* Navigation component is used to display navigation in books layout */}
            <Navigation/>
            <main className="pt-12 scroll-t-16 grid min-h-screen overflow-y-auto">
                {/* Outlet is used to render the child routes */}
                <Outlet />
            </main>
        </>
    );
}
export default BooksLayout;