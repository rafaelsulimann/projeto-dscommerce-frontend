import { useEffect, useState } from "react";
import DialogInfo from "../../../components/DialogInfo";
import LoadMoreButton from "../../../components/LoadMoreButton";
import ProductListingCard from "../../../components/ProductListingCard";
import RegisterProduct from "../../../components/RegisterProduct";
import SearchBar from "../../../components/SearchBar";
import { ProductDTO } from "../../../models/product";
import * as productService from "../../../services/product-service";
import "./styles.scss";

type QueryParams = {
  page: number;
  productName: string;
};

export default function ProductListing() {
  const [dialogInfoData, setDialogInfoData] = useState({
    visible: false,
    message: "Operação realizada com sucesso"
  });
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

  function handleDeleteClick(){
    setDialogInfoData({...dialogInfoData, visible: true})
  }

  function handleCloseModalClick(){
    setDialogInfoData({...dialogInfoData, visible: false});
  }

  return (
    <main className="product-listing">
      <section id="register-product">
        <RegisterProduct />
      </section>
      <section id="search-bar">
        <SearchBar onSearch={handleSearch} />
      </section>
      <section id="product-listing">
        <ProductListingCard products={products} onDeleteClick={handleDeleteClick}/>
      </section>
      <section id="load-more">
        {!isLastPage && <LoadMoreButton onClick={handleNextPageClick} />}
      </section>
      {
        dialogInfoData.visible &&
        <DialogInfo modalMessage={dialogInfoData.message} onCloseModal={handleCloseModalClick}/>
      }
    </main>
  );
}
