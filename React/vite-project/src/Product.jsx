import "./Product.css";
import ProductInfo from "./ProductInfo";

function Product({ title, img, features, price = 100 }) {
  return (
    <div className="Product-card">
      <img className="product-img" src={img} alt="" />
      <ProductInfo title={title} features={features} price={price} />
    </div>
  );
}

export default Product;
