import { Link } from "react-router-dom";
import CartIcon from "../CartIcon";
import "./styles.scss";

export default function HeaderClient() {
  return (
    <header className="header-client">
      <div className="container header-container">
        <div className="header-client-title">
          <Link to="/" className="header-client-link">
            <h1>DSCommerce</h1>
          </Link>
        </div>
        <div className="header-client-nav">
          <div className="header-client-cart-image">
            <Link to="/cart" className="header-client-link">
              <CartIcon />
            </Link>
          </div>
          <div className="header-client-login-button">
            <Link to="/login" className="header-client-link">
              Entrar
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
