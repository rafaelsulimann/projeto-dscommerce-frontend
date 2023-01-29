import productImg from "../../assets/produto.svg";
import editImg from "../../assets/caneta.svg";
import deleteImg from "../../assets/lixo.svg";
import './styles.scss';

export default function ProductListingCardItem() {
  return (
    <tr className="product-row">
      <td className="product-id">
        <h4>341</h4>
      </td>
      <td className="product-image">
        <img src={productImg} alt="Produto imagem" />
      </td>
      <td className="product-price">
        <h4>R$5000,00</h4>
      </td>
      <td className="product-name">
        <h4>Computador Gamer XT</h4>
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
