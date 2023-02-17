import axios from "axios";
import { useEffect, useState } from "react";
import CatalogList from "../../../components/CatalogList";
import SearchBar from "../../../components/SearchBar";
import { ProductDTO } from "../../../models/product";
import './styles.scss';

export default function Catalog() {
  const [products, setProducts] = useState<ProductDTO[]>([]);

  useEffect(() => {
    axios.get("http://localhost:8080/products?size=12")
    .then(response => {
      setProducts(response.data.content);
    })
  }, [])

  return (
    <main className="catalog">
      <section id="search-bar">
        <SearchBar />
      </section>
      <section id="catalog-list">
        <CatalogList products={products}/>
      </section>
    </main>
  );
}
