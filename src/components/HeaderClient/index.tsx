import { Link } from "react-router-dom";
import CartIcon from "../CartIcon";
import iconAdmin from "../../assets/engrenagem.svg";
import * as authService from "../../services/auth-service";
import "./styles.scss";
import { ContextToken } from "../../utils/context-token";
import { useContext } from "react";
import LoggedUser from "../LoggedUser";

export default function HeaderClient() {

  const { contextToken } = useContext(ContextToken);

  return (
    <header className="header-client">
      <div className="container header-container">
        <div className="header-client-title">
          <Link to="/" className="header-client-link">
            <h1>DSCommerce</h1>
          </Link>
        </div>
        <div className="header-client-nav">
          {
            contextToken &&
            authService.hasAnyRoles(["ROLE_ADMIN"]) && (
            <div className="header-client-nav-items header-client-admin-image">
              <Link to="/admin" className="header-client-link">
                <img src={iconAdmin} alt="Admin" />
              </Link>
            </div>
          )}
          <div className="header-client-nav-items header-client-cart-image">
            <Link to="/cart" className="header-client-link">
              <CartIcon />
            </Link>
          </div>
          <div className="header-client-nav-items header-client-login-button">
              <LoggedUser linkClassName="header-client-link" />
          </div>
        </div>
      </div>
    </header>
  );
}
