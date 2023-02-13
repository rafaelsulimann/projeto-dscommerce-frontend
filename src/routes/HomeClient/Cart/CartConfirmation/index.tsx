import { Link } from "react-router-dom";
import CartCardConfirmation from "../../../../components/CartCardConfirmation";
import SecondButton from "../../../../components/SecondButton";
import "./styles.scss";

export default function CartConfirmation() {
  return (
    <>
      <section id="cart-confirmation-product-card">
        <div className="container cart-confirmation-product-card-container">
          <CartCardConfirmation />
        </div>
      </section>
      <section id="cart-confirmation">
        <div className="container cart-confirmation-container">
          <div className="container cart-confirmation-message">
            <h2>Pedido realizado! Número 25</h2>
          </div>
          <Link to="/" className="cart-container-link">
            <SecondButton value="Início" />
          </Link>
        </div>
      </section>
    </>
  );
}
