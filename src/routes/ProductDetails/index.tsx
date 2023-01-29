import BuyButton from "../../components/PrimaryButton";
import HeaderClient from "../../components/HeaderClient";
import HomeButton from "../../components/SecondButton";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import "./styles.scss";
import SecondButton from "../../components/SecondButton";
import PrimaryButton from "../../components/PrimaryButton";

export default function ProductDetails() {
  return (
    <>
      <header>
        <HeaderClient />
      </header>
      <main>
        <section id="product-details-card">
          <ProductDetailsCard />
        </section>
        <section id="product-details-buttons">
          <div className="container product-details-buttons-container">
            <PrimaryButton name="Comprar" />
            <SecondButton name="Início" />
          </div>
        </section>
      </main>
    </>
  );
}
