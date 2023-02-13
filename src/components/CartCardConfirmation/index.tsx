import CartProductCardConfirmation from "../CartProductCardConfirmation";
import "./styles.scss";

export default function CartCardConfirmation() {
  return (
    <>
      <div className="container cart-confirmation-product-card-container">
        <div className="cart-confirmation-product-cards">
          <CartProductCardConfirmation />
          <CartProductCardConfirmation />
        </div>
        <div className="cart-confirmation-product-total-price">
          <h2>
            <span>R$</span>15000,00
          </h2>
        </div>
      </div>
    </>
  );
}
