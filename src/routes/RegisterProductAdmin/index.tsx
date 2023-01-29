import HeaderAdmin from "../../components/HeaderAdmin";
import LoadMoreButton from "../../components/LoadMoreButton";
import ProductListingCard from "../../components/ProductListingCard";
import RegisterProduct from "../../components/RegisterProduct";
import SearchBar from "../../components/SearchBar";
import "./styles.scss";

export default function RegisterProductAdmin() {
  return (
    <>
      <header>
        <HeaderAdmin name="Maria Silva" />
      </header>
      <main>
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
    </>
  );
}
