import "./ProductInfo.css";
import { useState } from "react";



function ProductInfo({ title, features, price = 100 }) {
  let styles ={color : "red"};
  let [isLiked, setIsLiked] = useState(false);
  let likeBtn = ()=>{
    setIsLiked(!isLiked);
    console.log("Like btn toggled!");
  }
  return (
    <div className="product-info">
      <div className="product-title-price">
        <h3>{title}</h3>

        <p className="product-price">Price :$ {price}</p>
      </div>
      <ul className="product-features">
        {features.map((feature) => (
          <li>{feature}</li>
        ))}
      </ul>
      {price > 1000 ? <div className="product-discount">5% off</div> : null}
      {isLiked ? <i onClick={likeBtn} className="fa-solid fa-heart" style={styles}></i> : <i onClick={likeBtn} className="fa-regular fa-heart"></i>}
    </div>
  );
}

export default ProductInfo;
