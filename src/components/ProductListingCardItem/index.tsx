import productImg from "../../assets/produto.svg";
import editImg from "../../assets/caneta.svg";
import deleteImg from "../../assets/lixo.svg";
import './styles.scss';
import { ProductDTO } from "../../models/product";

type Props = {
  product : ProductDTO;
}

export default function ProductListingCardItem({product}: Props) {
  return (
    <tr className="product-row">
      <td className="product-id">
        <h4>{product.id}</h4>
      </td>
      <td className="product-image">
        <img src={product.imgUrl} alt="Produto imagem" />
      </td>
      <td className="product-price">
        <h4>R${product.price.toFixed(2)}</h4>
      </td>
      <td className="product-name">
        <h4>{product.name}</h4>
      </td>
      <td className="product-button edit-button">
        <img src={editImg} alt="Editar" />
      </td>
      <td className="product-button delete-button">
        <img src={deleteImg} alt="Deletar" />
      </td>
    </tr>
  );
}
