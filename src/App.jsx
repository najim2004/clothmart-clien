import { Outlet } from "react-router-dom";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";

function App() {
  return (
    <div className="flex flex-col w-full lg:min-h-screen">
      <Navbar />
      <div className="flex-grow px-3 lg:px-0">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
