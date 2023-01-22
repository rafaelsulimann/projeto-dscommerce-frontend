import searchImg from '../../assets/lupa.svg';
import './styles.css';

export default function SearchBar() {
  return (
    <form className="search-div">
      <div className="search-icon">
        <img src={searchImg} alt="lupa" />
      </div>
      <div className="search-bar">
        <input
          name="productName"
          id="productName"
          type="text"
          placeholder="Nome do produto"
        />
      </div>
      <div className="search-close">
        <h5>x</h5>
      </div>
    </form>
  );
}
