import NewProductForm from "../../../components/NewProductForm";
import "./styles.scss";

export default function NewProduct() {
  return (
    <main className="new-product">
      <section id="new-product-card">
        <NewProductForm />
      </section>
    </main>
  );
}
