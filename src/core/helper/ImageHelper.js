import React from "react";

const ImageHelper = ({ product }) => {
  const imageurl = product
    ? product.image
    : `https://www.pexels.com/photo/pink-jellyfish-in-water-painting-3966569/`;
  return (
    <div className="rounded border border-sucess p-2">
      <img
        src={imageurl}
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        className="mb-3 rounded"
        alt=""
      />
    </div>
  );
};

export default ImageHelper;
