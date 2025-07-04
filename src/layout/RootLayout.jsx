import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

function RootLayout() {
  return (
    <>
      {/* Navigation component is used to display navigation in root layout i.e HomePage */}
      <Navigation />
      <main className="scroll-t-16 grid min-h-screen overflow-y-auto">
        {/* Outlet is used to render the child routes */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;