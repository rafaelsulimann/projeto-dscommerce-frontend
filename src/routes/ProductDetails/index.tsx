import './styles.css';
import ButtonInverse from "../../components/ButtonInverse";
import ButtonPrimary from "../../components/ButtonPrimary";
import HeaderClient from "../../components/HeaderClient";
import ProductDetailsCard from "../../components/ProductDetailsCard";

export default function ProductDetails() {
  return (
    <>
      <HeaderClient />
      <main>
        <section id="product-infos" className="generic-section">
          <div className="container">
            <ProductDetailsCard />
          </div>
        </section>
        <section id="buttons" className="button-section">
          <div className="container">
            <ButtonPrimary />
            <ButtonInverse />
          </div>
        </section>
      </main>
    </>
  );
}
