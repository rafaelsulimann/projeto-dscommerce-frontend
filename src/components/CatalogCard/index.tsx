import { Link } from "react-router-dom";
import { ProductDTO } from "../../models/product";
import LoadMoreButton from "../LoadMoreButton";
import "./styles.scss";

type Props = {
  product: ProductDTO;
};

export default function CatalogCard({ product }: Props) {
  return (
    <Link to={`/product-details/${product.id}`} className="catalog-link">
      <div className="catalog-card">
        <div className="catalog-card-image">
          <img src={product.imgUrl} alt={product.name} />
        </div>
        <div className="catalog-card-infos">
          <div className="catalog-card-price">
            <h3>
              <span>R$</span>
              {product.price.toFixed(2)}
            </h3>
          </div>
          <div className="catalog-card-name">
            <h3>{product.name}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
}
