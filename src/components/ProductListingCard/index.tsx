import { ProductDTO } from "../../models/product";
import LoadMoreButton from "../LoadMoreButton";
import ProductListingCardItem from "../ProductListingCardItem";
import "./styles.scss";

type Props = {
  products: ProductDTO[];
  onDeleteClick: any;
  onEditClick: any;
};

export default function ProductListingCard({ products, onDeleteClick, onEditClick }: Props) {
  return (
    <>
      <div className="container product-listing-container">
        <table className="product-listing-card">
          <thead>
            <tr>
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
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <ProductListingCardItem key={product.id} product={product} onDeleteClick={onDeleteClick} onEditClick={onEditClick}/>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
