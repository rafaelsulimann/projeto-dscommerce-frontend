import CatalogList from "../../../components/CatalogList";
import SearchBar from "../../../components/SearchBar";
import './styles.scss';

export default function Catalog() {
  return (
    <main className="catalog">
      <section id="search-bar">
        <SearchBar />
      </section>
      <section id="catalog-list">
        <CatalogList />
      </section>
    </main>
  );
}
