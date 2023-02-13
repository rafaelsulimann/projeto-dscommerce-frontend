import "./styles.scss";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import SecondButton from "../../../components/SecondButton";
import PrimaryButton from "../../../components/PrimaryButton";
import * as productService from "../../../services/product-service";
import { Link, useParams } from "react-router-dom";

export default function ProductDetails() {
  const params = useParams();
  const product = productService.findById(Number(params.productId));

  return (
    <main className="product-details">
      <section id="product-details-card">
        {product && <ProductDetailsCard product={product} />}
      </section>
      <section id="product-details-buttons">
        <div className="container product-details-buttons-container">
          <Link to="/cart" className="product-details-link">
            <PrimaryButton value="Comprar" />
          </Link>
          <Link to="/" className="product-details-link">
            <SecondButton value="Início" />
          </Link>
        </div>
      </section>
    </main>
  );
}
