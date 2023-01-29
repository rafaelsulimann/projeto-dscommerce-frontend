import cartImg from '../../assets/carrinho.svg';
import './styles.scss';

export default function HeaderTeste() {
  return (
    <div className="container header-container">
      <div className="header-client-title">
        <h1>DSCommerce</h1>
      </div>
      <div className="header-client-nav">
        <div className="header-client-cart-image">
          <img src={cartImg} alt="Carrinho" />
        </div>
        <div className="header-client-login-button">
          <a href="#">Entrar</a>
        </div>
      </div>
    </div>
  );
}
