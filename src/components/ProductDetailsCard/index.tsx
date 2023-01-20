import computerImg from '../../assets/produto.svg';
import ProductCategory from '../ProductCategory';
import './styles.css';

export default function ProductDetailsCard() {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={computerImg} alt="Produto" />
      </div>
      <hr />
      <div className="product-info">
        <div className="product-price">
          <h2>R$ 5000,00</h2>
        </div>
        <div className="product-name">
          <h5>Computador Gamer XT</h5>
        </div>
        <div className="product-description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            atque deserunt nesciunt non rerum quibusdam ut culpa officiis
            tenetur, ex magnam esse harum perspiciatis placeat! Distinctio ex
            fugit necessitatibus libero?
          </p>
        </div>
        <div className="product-categories">
          <ProductCategory />
          <ProductCategory />
        </div>
      </div>
    </div>
  );
}
