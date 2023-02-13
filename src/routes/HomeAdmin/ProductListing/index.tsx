import ProductListingCard from "../../../components/ProductListingCard";
import RegisterProduct from "../../../components/RegisterProduct";
import SearchBar from "../../../components/SearchBar";
import "./styles.scss";

export default function ProductListing() {
  return (
      <main className="product-listing">
        <section id="register-product">
          <RegisterProduct />
        </section>
        <section id="search-bar">
          <SearchBar />
        </section>
        <section id="product-listing">
            <ProductListingCard />
        </section>
      </main>
  );
}
