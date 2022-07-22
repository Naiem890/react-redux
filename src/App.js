import "./App.css";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
function App() {
  return (
    <>
      <header className="max-w-7xl mx-auto px-4">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <ToastContainer />
      </header>
    </>
  );
}

export default App;
