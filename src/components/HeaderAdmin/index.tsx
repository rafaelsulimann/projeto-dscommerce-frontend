import { NavLink } from "react-router-dom";
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
            <Link to="/admin" className="header-admin-nav-link">
              <h1>DSCommerce</h1>
            </Link>
          </div>
          <div className="header-admin-nav">
            <NavLink to="/admin/home" className={({isActive}) => isActive ? "header-admin-nav-link active" : "header-admin-nav-link non-active"}>
              <div className="header-admin-nav-home">
                <img src={homeImg} alt="Home" />
                <h2>Início</h2>
              </div>
            </NavLink>
            <NavLink to="/admin/products" className={({isActive}) => isActive ? "header-admin-nav-link active" : "header-admin-nav-link non-active"}>
              <div className="header-admin-nav-products">
                <img src={productImg} alt="Produtos" />
                <h2>Produtos</h2>
              </div>
            </NavLink>
            <div className="header-admin-nav-login-infos">
              <LoggedUser linkClassName="header-admin-nav-link" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
