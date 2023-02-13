import LoadMoreButton from "../LoadMoreButton";
import ProductListingCardItem from "../ProductListingCardItem";
import * as productService from '../../services/product-service';
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
            {
              productService.findAll().sort((a,b) => (a.id < b.id) ? -1 : 1).map(product => <ProductListingCardItem key={product.id} product={product} />)
            }
          </tbody>
        </table>
        <LoadMoreButton />
      </div>
    </>
  );
}
