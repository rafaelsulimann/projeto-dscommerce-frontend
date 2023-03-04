import { useEffect, useState } from "react";
import CatalogList from "../../../components/CatalogList";
import LoadMoreButton from "../../../components/LoadMoreButton";
import SearchBar from "../../../components/SearchBar";
import { ProductDTO } from "../../../models/product";
import { isAuthenticated } from "../../../services/auth-service";
import * as productService from "../../../services/product-service";
import "./styles.scss";

type QueryParams = {
  page: number;
  productName: string;
};

export default function Catalog() {
  const [isLastPage, setIsLastPage] = useState(false);
  const [products, setProducts] = useState<ProductDTO[]>([]);
  const [queryParams, setQueryParams] = useState<QueryParams>({
    page: 0,
    productName: "",
  });

  useEffect(() => {
    productService
      .findAllRequest(queryParams.page, queryParams.productName)
      .then((response) => {
        const nextPage = response.data.content;
        setProducts(products.concat(nextPage));
        setIsLastPage(response.data.last);
      });
  }, [queryParams]);

  function handleSearch(productName: string) {
    setProducts([]);
    setQueryParams({ ...queryParams, page: 0, productName: productName });
  }

  function handleNextPageClick() {
    setQueryParams({ ...queryParams, page: queryParams.page + 1 });
  }

  return (
    <main className="catalog">
      <section id="search-bar">
        <SearchBar onSearch={handleSearch} />
      </section>
      <section id="catalog-list">
        <CatalogList products={products} />
      </section>
      <section id="load-more">
        {
          !isLastPage && <LoadMoreButton onClick={handleNextPageClick} />
        }
      </section>
    </main>
  );
}
