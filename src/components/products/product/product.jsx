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
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
