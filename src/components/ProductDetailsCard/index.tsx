import productImg from "../../assets/produto.svg";
import CategorieCard from "../CategorieCard";
import "./styles.scss";

export default function ProductDetailsCard() {
  return (
    <div className="container product-details-card-container">
      <div className="product-details-card">
        <div className="product-details-card-image">
          <img src={productImg} alt="Produto" />
        </div>
        <div className="product-details-card-infos">
          <div className="product-details-card-price">
            <h3>
              <span>R$</span>5000,00
            </h3>
          </div>
          <div className="product-details-card-name">
            <h3>Computador Gamer XT</h3>
          </div>
          <div className="product-details-card-description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="product-details-card-categories">
            <CategorieCard name="Eletrônicos" />
            <CategorieCard name="Computadores" />
          </div>
        </div>
      </div>
    </div>
  );
}
