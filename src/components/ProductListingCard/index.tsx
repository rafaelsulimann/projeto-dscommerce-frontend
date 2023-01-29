import LoadMoreButton from "../LoadMoreButton";
import ProductListingCardItem from "../ProductListingCardItem";
import "./styles.scss";

export default function ProductListingCard() {
  return (
    <>
      <div className="container product-listing-container">
        <table className="product-listing-card">
          <thead>
            <th className="id">
              <h4>ID</h4>
            </th>
            <th></th>
            <th className="price">
              <h4>Preço</h4>
            </th>
            <th className="name">
              <h4>Nome</h4>
            </th>
          </thead>
          <tbody>
            <ProductListingCardItem />
            <ProductListingCardItem />
            <ProductListingCardItem />
            <ProductListingCardItem />
            <ProductListingCardItem />
            <ProductListingCardItem />
            <ProductListingCardItem />
          </tbody>
        </table>
        <LoadMoreButton />
      </div>
    </>
  );
}
