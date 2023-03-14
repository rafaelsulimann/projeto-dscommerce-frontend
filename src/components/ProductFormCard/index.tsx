import { Link } from "react-router-dom";
import FormInput from "../FormInput";
import PrimaryButton from "../PrimaryButton";
import SecondButton from "../SecondButton";
import * as forms from '../../utils/forms';
import "./styles.scss";

type Props = {
  formData: any;
  onChange: Function;
  onTurnDirty: Function
}

export default function ProductFormCard({formData, onChange, onTurnDirty}: Props) {

  function handleChange(event: any) {
    const dataUpdated = forms.update(formData, event.target.name, event.target.value);
    const dataValidated = forms.validate(dataUpdated, event.target.name);
    onChange(dataValidated);
  }

  function handleTurnDirty(name: string){
    onTurnDirty(name);
  }

  return (
      <div className="container product-form-card-container">
        <div className="product-form-card-div">
          <div className="product-form-card-title">
            <h2>Dados do produto</h2>
          </div>
          <form className="product-form-card">
            <div className="product-form-card-input-text">
              <label htmlFor={formData.name.id}>Nome</label>
              <FormInput {...formData.name} className="form-input" onChange={handleChange} onTurnDirty={handleTurnDirty}/>
              <div className="error-message">{formData.name.message}</div>
            </div>
            <div className="product-form-card-input-text">
              <label htmlFor={formData.price.id}>Preço</label>
              <FormInput {...formData.price} className="form-input" onChange={handleChange} onTurnDirty={handleTurnDirty}/>
              <div className="error-message">{formData.price.message}</div>
            </div>
            <div className="product-form-card-input-text">
              <label htmlFor={formData.imgUrl.id}>Imagem</label>
              <FormInput {...formData.imgUrl} className="form-input" onChange={handleChange} onTurnDirty={handleTurnDirty}/>
              <div className="error-message">{formData.imgUrl.message}</div>
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
  );
}
