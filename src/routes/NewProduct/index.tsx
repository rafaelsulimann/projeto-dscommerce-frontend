import HeaderAdmin from "../../components/HeaderAdmin";
import NewProductForm from "../../components/NewProductForm";
import "./styles.scss";

export default function NewProduct() {
  return (
    <>
      <header>
          <HeaderAdmin name="Maria Silva" />
      </header>
      <main>
        <section id="new-product-card">
            <NewProductForm />
        </section>
      </main>
    </>
  );
}
