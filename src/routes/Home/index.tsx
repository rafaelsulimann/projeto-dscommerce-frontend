import Catalog from "../../components/Catalog";
import HeaderClient from "../../components/HeaderClient";
import SearchBar from "../../components/SearchBar";
import "./styles.scss";

export default function Home() {
  return (
    <>
      <header>
        <HeaderClient />
      </header>
      <main>
        <section id="search-bar">
          <SearchBar />
        </section>
        <section id="catalog">
          <Catalog />
        </section>
      </main>
    </>
  );
}
