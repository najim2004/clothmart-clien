import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="flex flex-col w-full lg:min-h-screen">
      <Navbar />
      <div className="flex-grow px-3 lg:px-0">
        <Outlet />
      </div>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
