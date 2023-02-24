import "./styles.scss";
import { OrderDTO } from "../../models/order";
import CartProductCard from "../CartProductCard";
import EmptyCartMessage from "../EmptyCartMessage";

type Props = {
  cart : OrderDTO;
  onIncreaseItem : Function;
  onDecreaseItem : Function;
}

export default function CartCard({cart, onIncreaseItem, onDecreaseItem} : Props) {

  function handleIncreaseItemClick(productId : number){
    onIncreaseItem(productId);
  }

  function handleDecreaseItemClick(productId: number) {
    onDecreaseItem(productId);
  }

  return (
    <div className="container cart-product-card-container">
      {cart.items.length === 0 ? (
        <EmptyCartMessage />
      ) : (
        <>
          <div className="cart-product">
            <div className="cart-product-cards">
              {cart.items.map((item) => (
                <CartProductCard
                  onIncreaseItemClick={handleIncreaseItemClick}
                  onDecreaseItemClick={handleDecreaseItemClick}
                  item={item}
                  key={item.productId}
                />
              ))}
            </div>
            <div className="cart-product-total-price">
              <h2>
                <span>R$</span>
                {cart.total.toFixed(2)}
              </h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
