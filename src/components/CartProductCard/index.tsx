import { OrderItemDTO } from "../../models/order";
import "./styles.scss";

type Props = {
  item: OrderItemDTO;
  onIncreaseItemClick: Function;
  onDecreaseItemClick: Function;
};

export default function CartProductCard({
  item,
  onIncreaseItemClick,
  onDecreaseItemClick,
}: Props) {
  
  function handleIncreaseItemClick(productId: number) {
    onIncreaseItemClick(productId);
  }

  function handleDecreaseItemClick(productId: number) {
    onDecreaseItemClick(productId);
  }

  return (
    <div key={item.productId} className="cart-product-card">
      <div className="cart-product-card-infos">
        <img src={item.imgUrl} alt={item.name} />
        <div className="name-and-quantity">
          <h3>{item.name}</h3>
          <div className="quantity-div">
            <span onClick={() => handleDecreaseItemClick(item.productId)}>
              -
            </span>
            <p>{item.quantity}</p>
            <span onClick={() => handleIncreaseItemClick(item.productId)}>
              +
            </span>
          </div>
        </div>
      </div>
      <div className="cart-product-card-price">
        <h3>
          <span>R$</span>
          {item.subTotal.toFixed(2)}
        </h3>
      </div>
    </div>
  );
}
