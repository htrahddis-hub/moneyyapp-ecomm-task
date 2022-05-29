import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../reducers/cart";

const Product = (prop) => {
  
  const props = prop.product;
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addToCart(props));
  };
  const callModal=()=>{
    prop.modal(props);
  }
  return (
    <div className="col-lg-3 col-md-4 col-sm-4 col-6 my-2">
      <div className="card text-black m-1 h-100" style={{ height: "400px" }}>
        <img
          src={props.image}
          className="p-5 my-auto"
          style={{ maxHeight: "300px" }}
          alt="Apple Computer"
        />
        <div className="p-2 mt-auto ">
          <div className="text-center">
            <p className="text h5 mb-1">{props.title}</p>
          </div>
          {/* <p className="text-disabled text-center mb-3 mx-5">
            {props.description.substring(0, 50)}
          </p> */}
          <div className="d-flex justify-content-center mb-2">
            <button
              type="button"
              className="btn btn-sm shadow-none"
              onClick={callModal}
              style={{ color: "blue" }}
            >
              leave a review?
            </button>
          </div>
          <div className="d-flex justify-content-between">
            <p className="h5 bg-light m-0 p-2 rounded">${props.price}</p>
            
            <button
              type="button"
              className="btn btn-success"
              onClick={handleClick}
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  className="bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
