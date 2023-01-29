import BuyButton from "../../components/PrimaryButton";
import HeaderClient from "../../components/HeaderClient";
import HomeButton from "../../components/SecondButton";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import "./styles.scss";
import SecondButton from "../../components/SecondButton";
import PrimaryButton from "../../components/PrimaryButton";
import { ProductDTO } from "../../models/product";

const product: ProductDTO = {
  id: 2,
  name: "Smart TV",
  description: "Esta TV é muito bonita",
  imgUrl: "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg",
  price: 2500.99,
  categories: [
    {
      id: 2,
      name: "Eletrônicos"
    },
    {
      id: 3,
      name: "Computadores"
    },
    {
      id: 4,
      name: "Importados"
    }
  ]
}

export default function ProductDetails() {
  return (
    <>
      <header>
        <HeaderClient />
      </header>
      <main>
        <section id="product-details-card">
          <ProductDetailsCard product={product}/>
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
