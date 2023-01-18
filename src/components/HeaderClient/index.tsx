import cartImg from '../../assets/carrinho.svg';

export default function HeaderClient() {
  return (
      <header>
        <nav className="container nav-container">
          <div>
            <h1>DSCommerce</h1>
          </div>
          <div>
            <ul>
              <li className="header-carrinho">
                <img src={cartImg} alt="Carrinho" />
              </li>
              <li>
                <h4>Entrar</h4>
              </li>
            </ul>
          </div>
        </nav>
      </header>
  );
}
