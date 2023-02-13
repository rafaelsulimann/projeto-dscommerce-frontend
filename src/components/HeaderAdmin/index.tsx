import { Link } from "react-router-dom";
import homeImg from "../../assets/casa.svg";
import productImg from "../../assets/produtos.svg";
import "./styles.scss";

type Props = {
  name: string;
};

export default function HeaderAdmin({ name }: Props) {
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
              <h2>{name}</h2>
              <a href="#">Sair</a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
