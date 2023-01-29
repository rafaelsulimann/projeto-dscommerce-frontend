import homeImg from "../../assets/casa.svg";
import productImg from "../../assets/produtos.svg";
import "./styles.scss";

type Props = {
  name: string;
};

export default function HeaderAdmin({ name }: Props) {
  return (
    <>
      <div className="container header-container">
        <div className="header-admin-title">
          <h1>DSCommerce</h1>
        </div>
        <div className="header-admin-nav">
          <div className="header-admin-nav-home">
            <img src={homeImg} alt="Home" />
            <a href="#">Início</a>
          </div>
          <div className="header-admin-nav-products">
            <img src={productImg} alt="Produtos" />
            <a href="#">Produtos</a>
          </div>
          <div className="header-admin-nav-login-infos">
            <h2>{name}</h2>
            <a href="#">Sair</a>
          </div>
        </div>
      </div>
    </>
  );
}
