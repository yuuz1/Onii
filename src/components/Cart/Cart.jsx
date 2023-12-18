import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import {removeCartProduct, incQty} from "../../redux/actions/actions";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { addCartProduct, removeOneCart } from "../../redux/actions/actions";

import empty from "../../assets/images/blog/emptyy.webp";
import { Link } from "react-router-dom";

const Cart = () => {
  let carts = useSelector((state) => state.productReducer.cart);

  const oneProduct = useSelector((store) => store.productReducer.singleProduct);

  const totalPrice = carts?.reduce((total, item) => {
    return total + item.price * item.qty;
  }, 0);

  let dispatch = useDispatch();

  return (
    <div className="my-5 py-3 container">
      <div className="row">
        <h2 className="my-5">CART ITEMS</h2>
        <div className="col-md-8">
          {carts?.length > 0 ? (
            carts?.map((product) => (
              <Card
                key={product.id}
                style={{ width: "50rem", marginBottom: "20px" }}
              >
                <div className="row">
                  <div className="col-md-4">
                    <Card.Img
                      style={{ width: "20rem", height: "13rem" }}
                      variant="top img-fluid"
                      src={product?.image[0].imag}
                    />
                  </div>
                  <div className="col-md-8">
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text className="text-warning">
                        {product.category}
                      </Card.Text>
                      <Card.Text> {product.price}</Card.Text>
                      <div className="d-flex align-items-center justify-content-between">
                        <Card.Text>Quantity: {product.qty}</Card.Text>
                        <div className="d-flex align-items-center justify-content-between shadow counter">
                          <button onClick={() => dispatch(removeOneCart(product))}>-</button>
                          <div>
                            <span>{product.qty}</span>
                          </div>
                          <button onClick={() => dispatch(addCartProduct(product))} >+</button>
                        </div>
                        <Button
                          onClick={() => dispatch(removeCartProduct(product))}
                          variant="outline-danger mx-2"
                        >
                          <RiDeleteBin2Fill />
                        </Button>
                      </div>
                    </Card.Body>
                  </div>
                </div>
              </Card>
            ))
          ) : (
            <div>
              <img src={empty} alt="" className="img-fluid" />
            </div>
          )}
        </div>
        <div className="col-md-3">
          <h3 className="my-2">Price Details</h3>
          <div className="row">
            {carts?.map((product) => (
              <>
                <div key={product.id} className="col-md-9 ">
                  <Card.Text>{product.title}</Card.Text>
                </div>

                <div className="col-md-3">
                  <Card.Text>{product.price * product.qty}</Card.Text>
                </div>
              </>
            ))}
          </div>
          <hr />
          <div className="row my-2">
            <div className="col-md-9 ">
              <Card.Text>Total</Card.Text>
            </div>
            <div className="col-md-3 ">
              <Card.Text>{totalPrice}</Card.Text>
            </div>
          </div>
          <div class="d-grid gap-2">
            <Link to={"/"}>
            <button  className="btn btn-outline-warning" type="button">
              CONFIRM ORDER
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
