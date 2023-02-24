import { useEffect, useState } from "react";
import CatalogList from "../../../components/CatalogList";
import LoadMoreButton from "../../../components/LoadMoreButton";
import SearchBar from "../../../components/SearchBar";
import { ProductDTO } from "../../../models/product";
import * as productService from "../../../services/product-service";
import './styles.scss';

export default function Catalog() {
  const [products, setProducts] = useState<ProductDTO[]>([]);

  const [productSearchName, setProductSearchName] = useState("");

  function handleSearch(productName : string){
    setProductSearchName(productName);
  }

  useEffect(() => {
    productService.findAllRequest(0, productSearchName)
    .then(response => {
      setProducts(response.data.content);
    })
  }, [productSearchName]);

  return (
    <main className="catalog">
      <section id="search-bar">
        <SearchBar onSearch={handleSearch}/>
      </section>
      <section id="catalog-list">
        <CatalogList products={products}/>
      </section>
      <section id="load-more">
        <LoadMoreButton />
      </section>
    </main>
  );
}
