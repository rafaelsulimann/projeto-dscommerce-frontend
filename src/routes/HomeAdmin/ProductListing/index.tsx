import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DialogConfirmation from "../../../components/DialogConfirmation";
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
  const navigate = useNavigate();
  const [dialogInfoData, setDialogInfoData] = useState({
    visible: false,
    message: "Operação realizada com sucesso",
  });
  const [dialogConfirmationData, setDialogConfirmationData] = useState({
    visible: false,
    id: 0,
    message: "Tem certeza?",
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

  function handleDeleteClick(productId: number) {
    setDialogConfirmationData({
      ...dialogConfirmationData,
      id: productId,
      visible: true,
    });
  }
  
  function handleEditClick(productId: number) {
    navigate(`/admin/products/${productId}`);
  }

  function handleDiagloConfirmationAnswer(answer: boolean, productId: number) {
    if (answer) {
      productService.deleteById(productId)
        .then(() => {
          setDialogInfoData({ ...dialogInfoData, visible: true, message: "Operação realizada com sucesso" });
          setDialogConfirmationData({...dialogConfirmationData, id: 0, visible: false });
          setProducts([]);
          setQueryParams({ ...queryParams, page: 0 });
        })
        .catch(error => {
          setDialogInfoData({...dialogInfoData, visible: true, message: error.response.data.error})
          setDialogConfirmationData({...dialogConfirmationData, id: 0, visible: false});
        });
    }else{
      setDialogConfirmationData({...dialogConfirmationData, id: 0, visible: false});
    }
    console.log("Resposta", answer);
    console.log(dialogConfirmationData.visible);
  }

  function handleDialogInfoCloseClick() {
    setDialogInfoData({ ...dialogInfoData, visible: false });
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
        <ProductListingCard
          products={products}
          onDeleteClick={handleDeleteClick}
          onEditClick={handleEditClick}
        />
      </section>
      <section id="load-more">
        {!isLastPage && <LoadMoreButton onClick={handleNextPageClick} />}
      </section>
      {dialogInfoData.visible && (
        <DialogInfo
          modalMessage={dialogInfoData.message}
          onCloseModal={handleDialogInfoCloseClick}
        />
      )}
      {dialogConfirmationData.visible && (
        <DialogConfirmation
          modalMessage={dialogConfirmationData.message}
          onDialogConfirmationAnswer={handleDiagloConfirmationAnswer}
          id={dialogConfirmationData.id}
        />
      )}
    </main>
  );
}
