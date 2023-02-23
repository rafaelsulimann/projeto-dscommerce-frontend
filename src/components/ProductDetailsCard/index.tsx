import { Link } from "react-router-dom";
import { ProductDTO } from "../../models/product";
import CategorieCard from "../CategorieCard";
import PrimaryButton from "../PrimaryButton";
import SecondButton from "../SecondButton";
import * as cartService from '../../services/cart-service'
import "./styles.scss";

type Props = {
  product: ProductDTO;
};

export default function ProductDetailsCard({ product }: Props) {

  function handleBuyClick() {
    cartService.addProduct(product);
  }
  
  return (
    <>
      <div className="container product-details-card-container">
        <div className="product-details-card">
          <div className="product-details-card-image">
            <img src={product.imgUrl} alt={product.name} />
          </div>
          <div className="product-details-card-infos">
            <div className="product-details-card-price">
              <h3>
                <span>R$</span>
                {product.price}
              </h3>
            </div>
            <div className="product-details-card-name">
              <h3>{product.name}</h3>
            </div>
            <div className="product-details-card-description">
              <p>{product.description}</p>
            </div>
            <div className="product-details-card-categories">
              {product.categories.map((item) => (
                <CategorieCard key={item.id} name={item.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container product-details-buttons-container">
        <Link to="/cart" className="product-details-link" onClick={handleBuyClick}>
          <PrimaryButton value="Comprar" />
        </Link>
        <Link to="/" className="product-details-link">
          <SecondButton value="Início" />
        </Link>
      </div>
    </>
  );
}
