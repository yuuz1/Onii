import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { VscSearch } from "react-icons/vsc";
import { BsHeart } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  let carts = useSelector((state) => state.productReducer.cart);


  return (
    <React.Fragment>
      <nav className="nav navbar fixed-top navbar-expand-lg">
        <div className="container-fixed">
          <div className="d-flex align-items-center justify-content-center">
            <div
              style={{ color: "#383735" }}
              className="header-left col d-flex align-items-center justify-content-center"
            >
              <Link to="/login">
                <FaRegUserCircle
                  style={{ color: "#383735" }}
                  className="fs-3"
                />
              </Link>
              <Link to="/login" className="navbar-brand text-bold px-3">
                LOGIN
              </Link>
            </div>
            <div className="header-center col d-flex justify-content-center">
              <div
                style={{ color: "#383735" }}
                className="collapse navbar-collapse"
              >
                <Link style={{ color: "#383735" }} to="/" className="nav-link">
                  Home
                </Link>
                <Link
                  style={{ color: "#383735" }}
                  to="/products/:id"
                  className="nav-link"
                >
                  Product
                </Link>
                <Link
                  style={{ color: "#383735" }}
                  to="/pages"
                  className="nav-link"
                >
                  Pages
                </Link>

                <Link
                  style={{ color: "#383735" }}
                  to="/"
                  className="h1 fw-bold display-3"
                >
                  Onii
                </Link>

                <Link
                  style={{ color: "#383735" }}
                  to="/blog"
                  className="nav-link"
                >
                  Blog
                </Link>
                <Link
                  style={{ color: "#383735" }}
                  to="/lookbook"
                  className="nav-link"
                >
                  LookBook
                </Link>
                <Link
                  style={{ color: "#383735" }}
                  to="/contact"
                  className="nav-link"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="header-right col d-flex justify-content-center">
              <Link
                style={{ color: "#383735" }}
                to="/login"
                className=" navbar-brand fs-3"
              >
                <FaRegUserCircle />
              </Link>
              <Link
                style={{ color: "#383735" }}
                to="/search"
                className="navbar-brand fs-3"
              >
                <VscSearch />
              </Link>
              <Link
                style={{ color: "#383735" }}
                to="/likes"
                className=" navbar-brand fs-3 wc"
              >
                <BsHeart />
                <span className="wish-counter">0</span>
              </Link>
              <Link
                style={{ color: "#383735" }}
                to="/cart/:id"
                className="navbar-brand fs-3 cc"
              >
                <HiOutlineShoppingBag />
                <span className="cart-counter">{carts?.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
