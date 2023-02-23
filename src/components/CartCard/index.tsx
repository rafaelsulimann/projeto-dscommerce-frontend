import { OrderDTO } from "../../models/order";
import CartProductCard from "../CartProductCard";
import * as cartService from "../../services/cart-service";
import "./styles.scss";
import { useState } from "react";
import EmptyCartMessage from "../EmptyCartMessage";
import { Link } from "react-router-dom";
import PrimaryButton from "../PrimaryButton";
import SecondButton from "../SecondButton";

export default function CartCard() {
  const [cart, setCart] = useState<OrderDTO>(cartService.getCart());

  function handleIncreaseItemClick(productId: number) {
    cartService.increaseItem(productId);
    setCart(cartService.getCart());
  }
  
  function handleDecreaseItemClick(productId: number) {
    cartService.decreaseItem(productId);
    setCart(cartService.getCart());
  }
  
  function handleClearClick() {
    cartService.clearCart();
    setCart(cartService.getCart());
  }

  return (
    <>
      <div className="container cart-product-card-container">
        {cart.items.length === 0 ? (
          <EmptyCartMessage />
        ) : (
          <>
            <div className="cart-product">
              <div className="cart-product-cards">
                {cart.items.map((item) => (
                  <CartProductCard
                    increaseItem={() => handleIncreaseItemClick(item.productId)}
                    decreaseItem={() => handleDecreaseItemClick(item.productId)}
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
      <div className="container cart-buttons-container">
        <Link to="/cart/confirmation" className="cart-link">
          <PrimaryButton value="Finalizar pedido" />
        </Link>
        <Link to="/catalog" className="cart-link">
          <SecondButton value="Continuar comprando" />
        </Link>
        <div onClick={handleClearClick} className="cart-clear-button">
          <SecondButton value="Limpar carrinho" />
        </div>
      </div>
    </>
  );
}
