import './styles.css';
import computerImg from "../../assets/produto.svg";

export default function CatalogCard() {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={computerImg} alt="Produto" />
      </div>
      <div className="product-details">
        <div className="product-price">
          <h2>R$ 5000,00</h2>
        </div>
        <div className="product-name">
          <h5>Computador Gamer XT</h5>
        </div>
      </div>
    </div>
  );
}
