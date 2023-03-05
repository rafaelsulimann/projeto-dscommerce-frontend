import { OrderDTO } from "../../models/order";
import CartProductCardConfirmation from "../CartProductCardConfirmation";
import "./styles.scss";

type Props = {
  order?: OrderDTO;
}

export default function CartCardConfirmation({order} : Props) {
  return (
    <>
      <div className="container cart-confirmation-product-card-container">
        <div className="cart-confirmation-product-cards">
          {
            order?.items.map(item => <CartProductCardConfirmation item={item}/>)
          }
        </div>
        <div className="cart-confirmation-product-total-price">
          <h2>
            <span>R$</span>{order?.total.toFixed(2)}
          </h2>
        </div>
      </div>
    </>
  );
}
