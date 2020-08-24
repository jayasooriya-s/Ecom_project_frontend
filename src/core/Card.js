import React from "react";
import ImageHelper from "./helper/ImageHelper";
const Card = ({ product, addtoCart = true, removeFromCart = false }) => {
  const cardTitle = product ? product.name : "A Photo from holyCart";
  const cartDescription = product
    ? product.description
    : "description from holycart";
  const cartPrice = product ? product.price : "Default";

  return (
    <div className="card text-white bg-dark border border-info ">
      <div className="card-header lead">${cardTitle}</div>
      <div className="card-body">
        <ImageHelper product={product} />
        <p className="lead bg-success font-weight-normal text-wrap">
          {cartDescription}
        </p>
        <p className="btn btn-success rounded  btn-sm px-4">{cartPrice}</p>
        <div className="row">
          <div className="col-12">
            <button
              onClick={() => {}}
              className="btn btn-block btn-outline-success mt-2 mb-2"
            >
              Add to Cart
            </button>
          </div>
          <div className="col-12">
            <button
              onClick={() => {}}
              className="btn btn-block btn-outline-danger mt-2 mb-2"
            >
              Remove from cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
