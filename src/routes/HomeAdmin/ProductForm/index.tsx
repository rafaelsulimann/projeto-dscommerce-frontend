import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductFormCard from "../../../components/ProductFormCard";
import { CategoryDTO } from "../../../models/category";
import * as productService from "../../../services/product-service";
import * as forms from "../../../utils/forms";
import * as categoryService from "../../../services/category-service";
import "./styles.scss";

export default function ProductForm() {
  const params = useParams();
  const navigate = useNavigate();
  const isEditing = params.productId !== "create";

  const [categories, setCategories] = useState<CategoryDTO[]>([]);

  const [formData, setFormData] = useState<any>({
    name: {
      value: "",
      id: "name",
      name: "name",
      type: "text",
      placeholder: "Nome",
      validation: function (value: any) {
        return /^.{3,80}$/.test(value);
      },
      message: "Favor informar um nome de 3 a 80 caracteres",
    },
    price: {
      value: "",
      id: "price",
      name: "price",
      type: "number",
      placeholder: "Preço",
      validation: function (value: any) {
        return Number(value) > 0;
      },
      message: "Favor informar um valor positivo",
    },
    imgUrl: {
      value: "",
      id: "imgUrl",
      name: "imgUrl",
      type: "text",
      placeholder: "Imagem",
    },
    description: {
      value: "",
      id: "description",
      name: "description",
      type: "text",
      placeholder: "Descrição",
      validation: function (value: any) {
        return /^.{10,}$/.test(value);
      },
      message: "Favor informar no mínimo 10 caracteres",
    },
    categories: {
      value: [],
      id: "categories",
      name: "categories",
      placeholder: "Categorias",
      validation: function (value: CategoryDTO[]) {
        return value.length > 0;
      },
      message: "Favor informar ao menos uma categoria",
    },
  });

  useEffect(() => {
    categoryService.findAllRequest().then((response) => {
      setCategories(response.data.content);
    });
  }, []);

  useEffect(() => {
    if (isEditing) {
      productService.findById(Number(params.productId)).then((response) => {
        setFormData(forms.updateAll(formData, response.data));
      });
    }
  }, []);

  function handleChange(formDataProps: any) {
    setFormData(formDataProps);
  }

  function handleTurnDirty(formDataProps: any) {
    setFormData(formDataProps);
  }

  function handleSubmit(formDataProps: any) {
    const formDataValidated = forms.dirtyAndValidateAll(formDataProps);
    if (forms.hasAnyInvalid(formDataValidated)) {
      setFormData(formDataValidated);
      return;
    }

    const requestBody = forms.toValues(formData);

    if (isEditing) {
      requestBody.id = params.productId;
      productService.updateRequest(requestBody).then(() => {
        navigate("/admin/products");
      });
    }else {
      productService.insertRequest(requestBody).then(() => {
        navigate("/admin/products");
      });
    }
  }

  return (
    <main className="product-form">
      <section id="product-form-card">
        <ProductFormCard
          formData={formData}
          onChange={handleChange}
          onTurnDirty={handleTurnDirty}
          categories={categories}
          onSubmit={handleSubmit}
        />
      </section>
    </main>
  );
}
