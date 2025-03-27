import React from "react";
import classes from "./Shop.module.css";

function ProductDetail({ selectedProduct }) {
  const descriptionLines = selectedProduct.description.split('\n');
  
  return (
    <div className={classes.row}>
      <div className={classes.left}>
        <img src={selectedProduct.product_image} className={classes.prodimg} alt={selectedProduct.name} />
      </div>
      <div className={classes.right}>
        <h3>{selectedProduct.name}</h3>
        <h4>{selectedProduct.price} $</h4>
        {descriptionLines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
}

export default ProductDetail;
