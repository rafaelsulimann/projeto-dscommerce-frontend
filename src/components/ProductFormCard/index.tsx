import { useNavigate } from "react-router-dom";
import FormInput from "../FormInput";
import PrimaryButton from "../PrimaryButton";
import SecondButton from "../SecondButton";
import * as forms from "../../utils/forms";
import "./styles.scss";
import FormTextarea from "../FormTextarea";
import { CategoryDTO } from "../../models/category";
import FormSelect from "../FormSelect";
import { selectStyles } from "../../utils/select";

type Props = {
  formData: any;
  categories: CategoryDTO[];
  onChange: Function;
  onTurnDirty: Function;
  onSubmit: Function;
};

export default function ProductFormCard({
  formData,
  onChange,
  onTurnDirty,
  categories,
  onSubmit
}: Props) {

  const navigate = useNavigate();

  function handleChange(event: any) {
    onChange(
      forms.updateAndValidate(formData, event.target.name, event.target.value)
    );
  }

  function handleSelectChange(obj: any) {
    onChange(forms.updateAndValidate(formData, "categories", obj));
  }

  function handleTurnDirty(name: string) {
    onTurnDirty(forms.dirtyAndValidate(formData, name));
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    onSubmit(formData);
  }

  function handleCancelClick(event: any){
    navigate("/admin/products");
  }

  return (
    <div className="container product-form-card-container">
      <div className="product-form-card-div">
        <div className="product-form-card-title">
          <h2>Dados do produto</h2>
        </div>
        <form className="product-form-card" onSubmit={handleSubmit}>
          <div className="product-form-card-input-text">
            <label htmlFor={formData.name.id}>Nome</label>
            <FormInput
              {...formData.name}
              className="form-input"
              onChange={handleChange}
              onTurnDirty={handleTurnDirty}
            />
            <div className="error-message">{formData.name.message}</div>
          </div>
          <div className="product-form-card-input-text">
            <label htmlFor={formData.price.id}>Preço</label>
            <FormInput
              {...formData.price}
              className="form-input"
              onChange={handleChange}
              onTurnDirty={handleTurnDirty}
            />
            <div className="error-message">{formData.price.message}</div>
          </div>
          <div className="product-form-card-input-text">
            <label htmlFor={formData.imgUrl.id}>Imagem</label>
            <FormInput
              {...formData.imgUrl}
              className="form-input"
              onChange={handleChange}
              onTurnDirty={handleTurnDirty}
            />
            <div className="error-message">{formData.imgUrl.message}</div>
          </div>
          <div className="product-form-card-input-text">
            <FormSelect
              {...formData.categories}
              className="form-input input-select"
              styles={selectStyles}
              isMulti
              options={categories}
              noOptionsMessage={() => "Não há mais opções disponíveis"}
              getOptionValue={(obj: any) => String(obj.id)}
              getOptionLabel={(obj: any) => obj.name}
              onTurnDirty={handleTurnDirty}
              onChange={(obj: any) => {
                handleSelectChange(obj);
              }}
            />
            <div className="error-message">{formData.categories.message}</div>
          </div>
          <div className="product-form-card-input-text input-description">
            <label htmlFor={formData.description.id}>Descrição</label>
            <FormTextarea
              {...formData.description}
              className="form-input"
              onChange={handleChange}
              onTurnDirty={handleTurnDirty}
            />
            <div className="error-message">{formData.description.message}</div>
          </div>
          <div className="product-form-card-buttons">
            <SecondButton value="Cancelar" buttonClassName="product-form-card-button" onClick={handleCancelClick}/>
            <PrimaryButton value="Salvar" buttonClassName="product-form-card-button"/>
          </div>
        </form>
      </div>
    </div>
  );
}
