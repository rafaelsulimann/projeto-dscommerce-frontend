import productImg from "../../assets/produto.svg";
import './styles.scss';

export default function CartProductCard() {
  return (
    <div className="cart-product-card">
      <div className="cart-product-card-infos">
        <img src={productImg} alt="Produto" />
        <div className="name-and-quantity">
          <h3>Computador Gamer XT</h3>
          <div className="quantity-div">
            <span>-</span>
            <p>1</p>
            <span>+</span>
          </div>
        </div>
      </div>
      <div className="cart-product-card-price">
        <h3><span>R$</span>5000,00</h3>
      </div>
    </div>
  );
}
