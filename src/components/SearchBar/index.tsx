import searchImg from '../../assets/lupa.svg';
import './styles.scss';

export default function SearchBarTeste() {
  return (
    <div className="container search-bar-container">
      <form className="search-bar">
        <div className="search-bar-submit-button">
          <a href="#">
            <img src={searchImg} alt="Procurar" />
          </a>
        </div>
        <div className="search-bar-input-text">
          <input type="text" placeholder="Nome do produto" />
        </div>
        <div className="search-bar-clear-button">
          <a href="#">x</a>
        </div>
      </form>
    </div>
  );
}
