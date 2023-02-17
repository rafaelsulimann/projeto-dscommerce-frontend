import "./styles.scss";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../../models/product";
import * as productService from "../../../services/product-service";
import Error from "../Error";

export default function ProductDetails() {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<ProductDTO>();
  const [errorMessage, setErrorMessage] = useState<any>();

  useEffect(() => {
    productService.findById(Number(params.productId))
    .then(response => {
      console.log(response.data);
      setProduct(response.data);
    })
    .catch(error => {
      setErrorMessage(error.response.data.error);
    })
  }, []);

  return (
    <main className="product-details">
      <section id="product-details-card">
        {product ? <ProductDetailsCard product={product} /> : <Error message={errorMessage}/> }
      </section>
    </main>
  );
}
