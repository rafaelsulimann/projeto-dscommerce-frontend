import CatalogCard from "../CatalogCard";
import * as productService from '../../services/product-service';
import LoadMoreButton from "../LoadMoreButton";
import "./styles.scss";

export default function CatalogList() {
  return (
    <div className="container catalog-container">
      <div className="catalog-cards">
        {
          productService.findAll().map(product => <CatalogCard key={product.id} product={product} />)
        }
      </div>
      <div className="load-more-button">
        <LoadMoreButton />
      </div>
    </div>
  );
}
