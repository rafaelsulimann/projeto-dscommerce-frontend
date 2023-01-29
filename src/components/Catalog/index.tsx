import CatalogCard from "../CatalogCard";
import LoadMoreButton from "../LoadMoreButton";
import "./styles.scss";

export default function Catalog() {
  return (
    <div className="container catalog-container">
      <div className="catalog-cards">
        <CatalogCard />
        <CatalogCard />
        <CatalogCard />
        <CatalogCard />
        <CatalogCard />
        <CatalogCard />
        <CatalogCard />
        <CatalogCard />
        <CatalogCard />
        <CatalogCard />
        <CatalogCard />
        <CatalogCard />
      </div>
      <div className="load-more-button">
        <LoadMoreButton />
      </div>
    </div>
  );
}
