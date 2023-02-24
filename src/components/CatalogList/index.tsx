import CatalogCard from "../CatalogCard";
import LoadMoreButton from "../LoadMoreButton";
import "./styles.scss";
import { ProductDTO } from "../../models/product";

type Props = {
  products: ProductDTO[];
};

export default function CatalogList({ products }: Props) {
  return (
    <div className="container catalog-container">
      <div className="catalog-cards">
        {products.map((product) => (
          <CatalogCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
