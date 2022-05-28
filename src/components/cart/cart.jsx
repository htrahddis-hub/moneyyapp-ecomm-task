import React from "react";
import "./cart.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCart, addToCart, removeFromCart } from "../../reducers/cart";

const Cart = (prop) => {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let rem = 0;
    if (cart.cart.length === 0) return 0;
    else {
      const sum = cart.cart.reduce(
        (prev, curr) => prev + curr.count * curr.price,
        rem
      );
      return sum.toFixed(2);
    }
  };
  const sign = "<-";
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand mb-0 h1" href="/">
            E-Commerce
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-end"
            id="navbarSupportedContent"
          >
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <button
                className="d-flex btn btn-primary mt-sm-0 mt-2"
                type="button"
              >
                {sign}
              </button>
            </Link>
          </div>
        </div>
      </nav>
      <div className="container-fluid my-5 pt-5 px-0">
        <div className="container h-100 mx-auto">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div
                className="card card-registration card-registration-2"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body p-0">
                  <div className="row g-0">
                    <div className="col-lg-8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <h1 className="fw-bold mb-0 text-black">
                            Shopping Cart
                          </h1>
                          <h6 className="mb-0 text-muted">
                            {cart.cart.length} items
                          </h6>
                        </div>
                        <hr className="my-4" />
                        {cart.cart.map((product) => (
                          <div className="row mb-4 d-flex justify-content-between align-items-center">
                            <div className="col-md-2 col-lg-2 col-xl-2">
                              <img
                                src={product.image}
                                className="img-fluid rounded-3"
                                alt="Cotton T-shirt"
                              />
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-3">
                              <h6 className="text-muted">{product.category}</h6>
                              <h6 className="text-black mb-0">
                                {product.title}
                              </h6>
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                              <div
                                class="btn-group"
                                role="group"
                                aria-label="Basic outlined example"
                              >
                                <button
                                  type="button"
                                  class="btn btn-light"
                                  onClick={() => {
                                    dispatch(addToCart(product));
                                  }}
                                >
                                  +
                                </button>
                                <button type="button" class="btn btn-primary">
                                  {product.count}
                                </button>
                                <button
                                  type="button"
                                  class="btn btn-light"
                                  onClick={() => {
                                    dispatch(removeFromCart(product));
                                  }}
                                >
                                  -
                                </button>
                              </div>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                              <h6 className="mb-0">$ {product.price}</h6>
                            </div>
                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                              <a href="#!" className="text-muted">
                                <i className="fas fa-times"></i>
                              </a>
                            </div>
                          </div>
                        ))}

                        <hr className="my-2" />

                        <div className="pt-5">
                          <h6 className="mb-0">
                            <Link to="/">
                              <i className="fas fa-long-arrow-alt-left me-2"></i>
                              Back to shop
                            </Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 bg-grey">
                      <div className="p-5">
                        <h3 className="fw-bold mb-3 mt-2 pt-1">Summary</h3>
                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-4">
                          <h5 className="text-uppercase">
                            items {cart.cart.length}
                          </h5>
                          <h5>$ {totalPrice()}</h5>
                        </div>
                        <div className="d-flex justify-content-between mb-4">
                          <h5 className="text-uppercase mb-3">Shipping</h5>
                          <h5>$ 1.99</h5>
                        </div>

                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-2">
                          <h5 className="text-uppercase">Total price</h5>
                          <h5>
                            ${" "}
                            {(
                              parseFloat(totalPrice()) + parseFloat(1.99)
                            ).toFixed(2)}
                          </h5>
                        </div>

                        <button
                          type="button"
                          className="btn btn-dark btn-block btn-lg"
                          data-mdb-ripple-color="dark"
                        >
                          Pay
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
