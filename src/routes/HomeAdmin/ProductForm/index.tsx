import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductFormCard from "../../../components/ProductFormCard";
import * as productService from '../../../services/product-service'
import * as forms from '../../../utils/forms'
import "./styles.scss";

export default function ProductForm() {

  const params = useParams();
  const isEditing = params.productId !== 'create';

  const [formData, setFormData] = useState<any>({
    name: {
      value: "",
      id: "name",
      name: "name",
      type: "text",
      placeholder: "Nome",
      validation: function(value: any){
        return /^.{3,80}$/.test(value);
      },
      message: "Favor informar um nome de 3 a 80 caracteres"
    },
    price: {
      value: "",
      id: "price",
      name: "price",
      type: "number",
      placeholder: "Preço",
      validation: function(value: any){
        return Number(value) > 0;
      },
      message: "Favor informar um valor positivo"
    },
    imgUrl: {
      value: "",
      id: "imgUrl",
      name: "imgUrl",
      type: "text",
      placeholder: "Imagem"
    },
  });

  useEffect(() => {
    if (isEditing){
      productService.findById(Number(params.productId))
        .then(response => {
          setFormData(forms.updateAll(formData, response.data));
        })
    }
  }, [])

  function handleChange(formDataProps: any){
    setFormData(formDataProps);
  }

  function handleTurnDirty(formDataProps: any){
    setFormData(formDataProps);
  }

  return (
    <main className="product-form">
      <section id="product-form-card">
        <ProductFormCard formData={formData} onChange={handleChange} onTurnDirty={handleTurnDirty}/>
      </section>
    </main>
  );
}
