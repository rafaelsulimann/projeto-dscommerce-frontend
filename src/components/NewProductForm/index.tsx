import { Link } from "react-router-dom";
import PrimaryButton from "../PrimaryButton";
import SecondButton from "../SecondButton";
import "./styles.scss";

export default function NewProductForm() {
  return (
    <>
      <div className="container new-product-card-container">
        <div className="new-product-card">
          <div className="new-product-form-title">
            <h2>Dados do produto</h2>
          </div>
          <form className="new-product-form">
            <div className="new-product-form-input-text">
              <label htmlFor="name">Nome</label>
              <input name="name" id="name" type="text" placeholder="Nome" />
            </div>
            <div className="new-product-form-input-text">
              <label htmlFor="price">Preço</label>
              <input name="price" id="price" type="text" placeholder="Preço" />
            </div>
            <div className="new-product-form-input-text">
              <label htmlFor="image">Imagem</label>
              <input name="image" id="image" type="text" placeholder="Imagem" />
            </div>
            <div className="new-product-form-input-text input-categories">
              <select
                className="new-product-form-input-text input-select"
                required
              >
                <option value="" disabled selected>
                  Categorias
                </option>
                <option value="1">Computadores</option>
                <option value="2">Eletrônicos</option>
              </select>
            </div>
            <div className="new-product-form-input-text input-description">
              <textarea placeholder="Descrição"></textarea>
            </div>
            <div className="new-product-form-buttons">
              <Link to="/admin/product-listing" className="new-product-link">
                <SecondButton value="Cancelar" />
              </Link>
              <Link to="/admin/product-listing" className="new-product-link">
                <PrimaryButton value="Salvar" />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
