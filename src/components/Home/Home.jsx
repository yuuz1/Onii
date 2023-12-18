import React from "react";
import Carousel from "./Carousel";
import { animateScroll as scroll } from "react-scroll";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { selectedProduct, filteredProduct } from "../../redux/actions/actions";
const Home = () => {
  const products = useSelector((state) => state.productReducer);
  const filteredProducts = useSelector((state) => state.productReducer.filterProducts);

  let dispatch = useDispatch();

  return (
    <div className="home container">
      <Carousel />
      <div>
        {/* {console.log(products?.products,"prprpprp")} */}
        <hr />
        <p className="h2 text-start my-4">OUR PRODUCTS</p>
        <div className="d-flex align-items-center justify-content-start my-3">
          {/* <Button variant="outline-dark">CLOTHES</Button>
          <Button variant="outline-dark mx-2">SHOES</Button>
          <Button variant="outline-dark">WATCHES</Button> */}
        </div>
      </div>
      <div className="container d-flex flex-wrap align-items-stretch justify-content-center">
        {products?.products?.map((product) => (
          <div key={product.id}>
            <Card className="my-3 mx-2 shadow shop" style={{ width: "18rem" }}>
              <Card.Img
                style={{ width: "17.8rem", height: "18rem" }}
                variant="top img-fluid"
                src={product?.image[0].imag}
              />

              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text style={{ color: "orange" }}>
                  {product.category}
                </Card.Text>
                <Card.Text>{product.price}</Card.Text>
                <Link
                  to={`products/${product.id}`}
                  onClick={() => scroll.scrollToTop()}
                >
                  <Button
                    onClick={() => dispatch(selectedProduct(product))}
                    variant="outline-primary "
                  >
                    VIEW DETAILS
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
