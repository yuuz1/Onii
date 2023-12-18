/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import "../../themes/Shop.css";
import { AiFillStar } from "react-icons/ai";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { TbPoint } from "react-icons/tb";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BsHeart } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { AiOutlineReload } from "react-icons/ai";
import { displayImg } from "../../redux/actions/actions";
import { addCartProduct } from "../../redux/actions/actions";
import { selectedProduct } from "../../redux/actions/actions";

// import {productQty} from '../../redux/actions/actions'

const Product = () => {
  const products = useSelector((state) => state.productReducer);

  const oneProduct = useSelector((store) => store.productReducer.singleProduct);
  let carts = useSelector((state) => state.productReducer.cart);

  const [image, setImage] = useState("");
  let dispatch = useDispatch();

  useEffect(() => {
    setImage(oneProduct.image[0].imag);
  }, [oneProduct.image]);

  // console.log("oneImage", oneImage);

  return (
    <div className=" container my-5 py-5">
      <div className="row my-5">
        <div className="col-md-6 d-flex image-product">
          <div className="d-flex flex-coloumn">
            <div className="div img-map col-sm-3">
              {oneProduct.image.map((imag) => (
                <div key={imag.id}>
                  <img
                    onClick={() => dispatch(displayImg(setImage(imag.imag)))}
                    className="imagemap my-3"
                    src={imag.imag}
                    alt=""
                  />
                </div>
              ))}
            </div>
            <div className="div col-sm-5">
              <img
                src={image}
                alt="Tap image to full view"
                className="img-responsive"
              />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <p className="h3">{oneProduct.title}</p>
          <p className="h3">{oneProduct.category}</p>
          <p>{oneProduct.price}</p>
          <div className="d-flex">
            <span style={{ color: "gold" }}>
              <AiFillStar />
            </span>
            <span style={{ color: "gold" }}>
              <AiFillStar />
            </span>
            <span style={{ color: "gold" }}>
              <AiFillStar />
            </span>
            <span style={{ color: "gold" }}>
              <AiFillStar />
            </span>
            <span style={{ color: "gold" }}>
              <AiFillStar />
            </span>
          </div>
          <p className="text-muted my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            recusandae quae aliquam illo voluptates esse voluptate error at
            saepe. Molestiae?Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Excepturi, aliquam!
          </p>
          <div className="d-flex align-items-center justify-content-start">
            <span>
              <TbPoint className="point" />
            </span>
            <span className="mx-2">In Stock</span>
          </div>
          <div className="counter-container">
            <div className="cart-button">
              <Link to={`/cart/${oneProduct.id}`}>
                <button
                  onClick={() => dispatch(addCartProduct(oneProduct))}
                  className="m-0"
                >
                  ADD TO CART
                  <span className="fs-4 px-1">
                    <HiOutlineShoppingBag />
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="my-5">
            <div>
              ADD TO WISHLIST
              <span className="mx-3  fs-5">
                <span className="px-0">
                  <BsHeart className="wish-heart" />
                </span>
              </span>
            </div>
          </div>
          <div>
            <p style={{ color: "#222" }} className="fw-bold">
              SKU: <span className="text-muted fw-normal">0123</span>
            </p>
            <p style={{ color: "#222" }} className="fw-bold">
              Categories:{" "}
              <span className="text-muted fw-normal">Men,Clothes</span>
            </p>
            <p style={{ color: "#222" }} className="fw-bold">
              Tags:{" "}
              <span className="text-muted fw-normal">man,t-shirt,jean</span>
            </p>
          </div>
          <p style={{ color: "#222" }} className="fw-bold link">
            share:{" "}
            <span className="mx-2">
              <FaFacebookF />
            </span>
            <span className="mx-2">
              <AiOutlineTwitter />
            </span>
            <span className="mx-2">
              <FaPinterestP />
            </span>
            <span className="mx-2">
              <SiInstagram />
            </span>
          </p>
        </div>
      </div>
      <div className="description">
        <h5>Description</h5>
        <h5>Description</h5>
        <h5>Description</h5>
      </div>
      <div className="section text-muted text-center my-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quasi
        accusantium nihil nobis quidem excepturi, voluptatibus laboriosam
        commodi, officiis ullam corporis odio placeat magni reprehenderit
        laudantium. Ut natus soluta aliquam accusantium tempora libero
        consectetur doloribus distinctio nobis, dolor mollitia eum minima
        temporibus. Dolore, consequuntur aliquam molestias ex minima voluptate
        reprehenderit.
        <p className="text-muted text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          quasi accusantium nihil nobis quidem excepturi, voluptatibus
          laboriosam commodi, officiis ullam corporis odio placeat magni
          reprehenderit laudantium. Ut natus soluta aliquam accusantium tempora
          libero consectetur doloribus distinctio nobis, dolor mollitia eum
          minima temporibus. Dolore, consequuntur aliquam molestias ex minima
          voluptate reprehenderit.
        </p>
        <hr className="my-5" />
      </div>
      <div className="my-5">
        <h3>Related Products</h3>
        <div className=" container align-items-center flex-wrap justify-content-center d-flex">
          {products?.products?.map((product) => (
            <div key={product.id}>
              <Card
                className="my-3 mx-2 shadow shop"
                style={{ width: "18rem" }}
              >
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
                  <div onClick={() => scroll.scrollToTop()}>
                    <Button
                      onClick={() => dispatch(selectedProduct(product))}
                      variant="outline-primary "
                    >
                      VIEW DETAILS
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="load">
            LOAD MORE <AiOutlineReload />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
