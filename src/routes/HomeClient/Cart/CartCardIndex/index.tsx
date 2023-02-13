import { Link } from "react-router-dom";
import CartCard from "../../../../components/CartCard";
import PrimaryButton from "../../../../components/PrimaryButton";
import SecondButton from "../../../../components/SecondButton";
import "./styles.scss";

export default function CartCardIndex() {
  return (
    <>
      <section id="cart-product-card">
        <div className="container cart-product-card-container">
          <CartCard />
        </div>
      </section>
      <section id="cart-buttons">
        <div className="container cart-buttons-container">
          <Link to="/cart/confirmation" className="cart-link">
            <PrimaryButton value="Finalizar pedido" />
          </Link>
          <Link to="/catalog" className="cart-link">
            <SecondButton value="Continuar comprando" />
          </Link>
        </div>
      </section>
    </>
  );
}
