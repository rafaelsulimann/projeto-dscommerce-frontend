import CartCard from "../../components/CartCard";
import HeaderClient from "../../components/HeaderClient";
import PrimaryButton from "../../components/PrimaryButton";
import SecondButton from "../../components/SecondButton";
import "./styles.scss";

export default function Cart() {
  return (
    <>
      <header>
        <HeaderClient />
      </header>
      <main>
        <section id="cart-product-card">
          <CartCard />
        </section>
        <section id="cart-buttons">
          <div className="container cart-buttons-container">
            <PrimaryButton name="Finalizar pedido" />
            <SecondButton name="Continuar comprando" />
          </div>
        </section>
      </main>
    </>
  );
}
