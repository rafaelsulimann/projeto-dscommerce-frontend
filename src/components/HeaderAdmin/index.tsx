import { Link } from "react-router-dom";
import homeImg from "../../assets/casa.svg";
import productImg from "../../assets/produtos.svg";
import LoggedUser from "../LoggedUser";
import "./styles.scss";

export default function HeaderAdmin() {
  return (
    <>
      <header className="header-admin">
        <div className="container header-container">
          <div className="header-admin-title">
            <Link to="/admin" className="header-admin-link">
              <h1>DSCommerce</h1>
            </Link>
          </div>
          <div className="header-admin-nav">
            <Link to="/admin" className="header-admin-link">
              <div className="header-admin-nav-home">
                <img src={homeImg} alt="Home" />
                Início
              </div>
            </Link>
            <Link to="/admin/product-listing" className="header-admin-link">
              <div className="header-admin-nav-products">
                <img src={productImg} alt="Produtos" />
                Produtos
              </div>
            </Link>
            <div className="header-admin-nav-login-infos">
              <LoggedUser linkClassName="header-admin-link" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
