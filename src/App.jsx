import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";
import { Toaster } from "react-hot-toast";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "./Context/ContextProvider";

function App() {
  const { authenticationStatus } = useContext(MyContext);
  const { isLoading } = authenticationStatus;
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  useEffect(() => {
    if (!isLoading) setLoading(false);
  }, [isLoading]);
  return (
    <div className="flex flex-col w-full lg:min-h-screen">
      {loading ? (
        <div className="w-full h-screen my-5 flex justify-center items-center">
          <span className="loading loading-dots loading-lg text-gray-500"></span>
        </div>
      ) : (
        <>
          <Navbar />
          <div className="flex-grow px-4 lg:px-0">
            <Outlet />
          </div>
          <Footer />
          <Toaster />
        </>
      )}
    </div>
  );
}

export default App;
