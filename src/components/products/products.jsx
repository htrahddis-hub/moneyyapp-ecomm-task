import React, { useEffect } from "react";
import Product from "./product/product";
import { getProduct } from "../../actions/product";
import { useSelector, useDispatch } from "react-redux";
import { selectProducts, addReview } from "../../reducers/product";
import "./products.css";

const Products = (props) => {
  const [toggleModal, setToggleModal] = React.useState(false);
  const [productData, setProductData] = React.useState(false);
  const product = useSelector(selectProducts);
  const dispatch = useDispatch();
  const modal = (id) => {
    setProductData(id);
    console.log(id);
    setToggleModal(true);
  };

  const handleReview = (event) => {
    event.preventDefault();
    dispatch(addReview({ product: productData, review: "review" }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(getProduct());
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <div>
      {product.length > 0 ? (
        <div
          className={
            toggleModal
              ? "bg-light mt-4 px-0 100vh container-fluid toggleModal"
              : "bg-light mt-4 px-0 100vh container-fluid"
          }
        >
          <div className="pt-5 row justify-content-center px-0 mx-md-5 mx-lg-5 ">
            {product.map((item, idx) => {
              return <Product product={item} key={idx} modal={modal} />;
            })}
            {/* <button onClick={handleClick}>arrow</button> */}
          </div>
        </div>
      ) : (
        <></>
      )}
      {toggleModal ? (
        <div
          className="modal fade show"
          id="exampleModalLive"
          tabIndex="-1"
          aria-labelledby="exampleModalLiveLabel"
          style={{ display: "block" }}
          aria-modal="true"
          role="dialog"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLiveLabel">
                  {productData.title}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => {
                    setToggleModal(false);
                  }}
                ></button>
              </div>
              <div className="modal-body">
                <section>
                  <div className="row text-center">
                    <div className="col-md-12">
                      <div
                        id="carouselBasicExample"
                        className="carousel slide carousel-dark"
                        data-bs-ride="carousel"
                      >
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <p className="lead font-italic mx-4 mx-md-5">
                              "Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Fugit, error amet numquam iure
                              provident voluptate esse quasi, voluptas nostrum
                              quisquam!"
                            </p>

                            <p className="text-muted mb-0">- Anna Morian</p>
                          </div>

                          <div className="carousel-item">
                            <p className="lead font-italic mx-4 mx-md-5">
                              "Neque cupiditate assumenda in maiores repudiandae
                              mollitia adipisci maiores repudiandae mollitia
                              consectetur adipisicing architecto elit sed
                              adipiscing elit."
                            </p>

                            <p className="text-muted mb-0">- Teresa May</p>
                          </div>

                          <div className="carousel-item">
                            <p className="lead font-italic mx-4 mx-md-5">
                              "Duis aute irure dolor in reprehenderit in
                              voluptate velit esse cillum dolore eu fugiat nulla
                              pariatur est laborum neque cupiditate assumenda in
                              maiores."
                            </p>

                            <p className="text-muted mb-0">- Kate Allise</p>
                          </div>
                        </div>

                        <button
                          className="carousel-control-prev"
                          type="button"
                          data-bs-target="#carouselBasicExample"
                          data-bs-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                          className="carousel-control-next"
                          type="button"
                          data-bs-target="#carouselBasicExample"
                          data-bs-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="modal-footer d-flex justify-content-between">
                <form>
                  <div className="mb-3 " style={{ width: "400px" }}>
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Add a review
                    </label>
                    <textarea
                      className="form-control "
                      aria-label="With textarea"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary me-0"
                    onClick={handleReview}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Products;
