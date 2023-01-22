import "./styles.css";
import HeaderClient from "../../components/HeaderClient";
import SearchBar from "../../components/SearchBar";
import CatalogCard from "../../components/CatalogCard";
import LoadButton from "../../components/LoadButton";

export default function Catalog() {
  return (
    <>
    <HeaderClient />
    <main>
      <section id="search" className="generic-section">
        <div className="container">
          <SearchBar />
        </div>
      </section>
      <section id="catalog">
        <div className="container">
          <div className="product-listing">
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
        </div>
      </section>
      <section id="load-button">
        <div className="container">
          <LoadButton />
        </div>
      </section>
    </main>
    </>
  );
}
