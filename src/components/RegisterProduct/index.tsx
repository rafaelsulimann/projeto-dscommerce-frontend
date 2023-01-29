import SearchBar from "../SearchBar";
import "./styles.scss";

export default function RegisterProduct() {
  return (
    <>
      <div className="container register-product-container">
        <div className="register-product-title">
          <h2>Cadastro de produtos</h2>
        </div>
        <div className="register-product-new-button">
          <input type="button" value="Novo" />
        </div>
      </div>
    </>
  );
}
