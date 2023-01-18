import "./App.css";
import computerImg from "./assets/produto.svg";
import HeaderClient from "./components/HeaderClient";

export default function App() {
  return (
    <>
      <HeaderClient />
      <main>
        <section id="product-infos" className="generic-section">
          <div className="container">
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem atque deserunt nesciunt non rerum quibusdam ut
                    culpa officiis tenetur, ex magnam esse harum perspiciatis
                    placeat! Distinctio ex fugit necessitatibus libero?
                  </p>
                </div>
                <div className="product-categories">
                  <div className="product-categorie">
                    <h5>Eletrônicos</h5>
                  </div>
                  <div className="product-categorie">
                    <h5>Computadores</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="buttons" className="button-section">
          <div className="container">
            <div className="buy-button button">
              <input type="submit" value="Comprar" />
            </div>
            <div className="home-button button">
              <input type="button" value="Início" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
