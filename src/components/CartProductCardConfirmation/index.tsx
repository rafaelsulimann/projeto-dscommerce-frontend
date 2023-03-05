import { OrderItemDTO } from "../../models/order";
import './styles.scss';

type Props = {
  item: OrderItemDTO;
}

export default function CartProductCardConfirmation({item} : Props) {
  return (
    <div className="cart-confirmation-product-card">
      <div className="cart-confirmation-product-card-infos">
        <img src={item.imgUrl} alt={item.name} />
        <div className="confirmation-name-and-quantity">
          <h3>{item.name}</h3>
          <div className="confirmation-quantity-div">
            <p>{item.quantity}</p>
          </div>
        </div>
      </div>
      <div className="cart-confirmation-product-card-price">
        <h3><span>R$</span>{item.subTotal.toFixed(2)}</h3>
      </div>
    </div>
  );
}
