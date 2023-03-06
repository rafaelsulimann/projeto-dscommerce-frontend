import { Link } from "react-router-dom";
import PrimaryButton from "../PrimaryButton";
import SecondButton from "../SecondButton";
import "./styles.scss";

export default function ProductFormCard() {
  return (
    <>
      <div className="container product-form-card-container">
        <div className="product-form-card-div">
          <div className="product-form-card-title">
            <h2>Dados do produto</h2>
          </div>
          <form className="product-form-card">
            <div className="product-form-card-input-text">
              <label htmlFor="name">Nome</label>
              <input name="name" id="name" type="text" placeholder="Nome" />
            </div>
            <div className="product-form-card-input-text">
              <label htmlFor="price">Preço</label>
              <input name="price" id="price" type="text" placeholder="Preço" />
            </div>
            <div className="product-form-card-input-text">
              <label htmlFor="image">Imagem</label>
              <input name="image" id="image" type="text" placeholder="Imagem" />
            </div>
            <div className="product-form-card-input-text input-categories">
              <select
                className="product-form-card-input-text input-select"
                required
              >
                <option value="" disabled selected>
                  Categorias
                </option>
                <option value="1">Computadores</option>
                <option value="2">Eletrônicos</option>
              </select>
            </div>
            <div className="product-form-card-input-text input-description">
              <textarea placeholder="Descrição"></textarea>
            </div>
            <div className="product-form-card-buttons">
              <Link to="/admin/products" className="product-form-card-link">
                <SecondButton value="Cancelar" />
              </Link>
              <Link to="/admin/products" className="product-form-card-link">
                <PrimaryButton value="Salvar" />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
