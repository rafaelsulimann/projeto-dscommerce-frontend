import productImg from "../../assets/produto.svg";
import './styles.scss';

export default function CartProductCardConfirmation() {
  return (
    <div className="cart-confirmation-product-card">
      <div className="cart-confirmation-product-card-infos">
        <img src={productImg} alt="Produto" />
        <div className="confirmation-name-and-quantity">
          <h3>Computador Gamer XT</h3>
          <div className="confirmation-quantity-div">
            <p>1</p>
          </div>
        </div>
      </div>
      <div className="cart-confirmation-product-card-price">
        <h3><span>R$</span>5000,00</h3>
      </div>
    </div>
  );
}
