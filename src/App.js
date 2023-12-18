import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import Cart from './components/Cart/Cart.jsx'
import Product from "./components/Shop/Product.jsx";
import Payment from './components/Home/Home.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "./themes/Navbar.css";
import "./themes/Footer.css";
import "./themes/Products.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/products/:id"} element={<Product />}></Route>
          <Route path={"/cart/:id"} element={<Cart />}></Route>
          <Route path={"/payment"} element={<Payment />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
