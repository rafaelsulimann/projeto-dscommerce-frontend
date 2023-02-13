import { Link } from "react-router-dom";
import "./styles.scss";

export default function RegisterProduct() {
  return (
    <>
      <div className="container register-product-container">
        <div className="register-product-title">
          <h2>Cadastro de produtos</h2>
        </div>
        <div className="register-product-new-button">
          <Link to="/admin/new-product" className="product-listing-link">
            <input type="button" value="Novo" />
          </Link>
        </div>
      </div>
    </>
  );
}
