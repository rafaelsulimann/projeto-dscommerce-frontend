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
    </>
  );
}
