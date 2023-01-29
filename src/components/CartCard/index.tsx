import CartProductCard from "../CartProductCard";
import "./styles.scss";

export default function CartCard() {
  return (
    <>
      <div className="container cart-product-card-container">
        <div className="cart-product-cards">
          <CartProductCard />
          <CartProductCard />
        </div>
        <div className="cart-product-total-price">
          <h2>
            <span>R$</span>15000,00
          </h2>
        </div>
      </div>
    </>
  );
}
