import { useState } from "react";
import { Link } from "react-router-dom";
import { OrderDTO } from "../../../../models/order";
import CartCard from "../../../../components/CartCard";
import PrimaryButton from "../../../../components/PrimaryButton";
import SecondButton from "../../../../components/SecondButton";
import * as cartService from "../../../../services/cart-service";
import "./styles.scss";

export default function CartCardIndex() {
  const [cart, setCart] = useState<OrderDTO>(cartService.getCart());

  function handleClearClick() {
    cartService.clearCart();
    setCart(cartService.getCart());
  }

  function handleIncreaseItem(productId: number) {
    cartService.increaseItem(productId);
    setCart(cartService.getCart());
  }

  function handleDecreaseItem(productId: number) {
    cartService.decreaseItem(productId);
    setCart(cartService.getCart());
  }

  return (
    <>
      <section id="cart-product-card">
        <div className="container cart-product-card-container">
          <CartCard
            cart={cart}
            onIncreaseItem={handleIncreaseItem}
            onDecreaseItem={handleDecreaseItem}
          />
        </div>
      </section>
      <section id="cart-buttons">
        <div className="container cart-buttons-container">
          {cart.items.length !== 0 ? (
            <Link to="/cart/confirmation" className="cart-link">
              <PrimaryButton value="Finalizar pedido" />
            </Link>
          ) : (
            <div />
          )}
          <Link to="/catalog" className="cart-link">
            <SecondButton value="Continuar comprando" />
          </Link>
          {cart.items.length !== 0 ? (
            <div onClick={handleClearClick} className="cart-clear-button">
              <SecondButton value="Limpar carrinho" />
            </div>
          ) : (
            <div />
          )}
        </div>
      </section>
    </>
  );
}
