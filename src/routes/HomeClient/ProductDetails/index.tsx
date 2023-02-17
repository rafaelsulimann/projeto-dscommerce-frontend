import "./styles.scss";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../../models/product";
import axios from "axios";

export default function ProductDetails() {
  const params = useParams();
  const [product, setProduct] = useState<ProductDTO>();

  useEffect(() => {
    axios.get(`http://localhost:8080/products/${params.productId}`)
    .then(response => {
      console.log(response.data);
      setProduct(response.data);
    })
  }, [])

  return (
    <main className="product-details">
      <section id="product-details-card">
        {product && <ProductDetailsCard product={product} />}
      </section>
    </main>
  );
}
