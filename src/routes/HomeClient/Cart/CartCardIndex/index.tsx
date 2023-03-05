import "./styles.scss";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { OrderDTO } from "../../../../models/order";
import CartCard from "../../../../components/CartCard";
import PrimaryButton from "../../../../components/PrimaryButton";
import SecondButton from "../../../../components/SecondButton";
import { ContextCartCount } from "../../../../utils/context-cart";
import * as cartService from "../../../../services/cart-service";
import * as orderService from "../../../../services/order-service";

export default function CartCardIndex() {

  const navigate = useNavigate();
  const [cart, setCart] = useState<OrderDTO>(cartService.getCart());
  const {setContextCartCount} = useContext(ContextCartCount);

  function handleClearClick() {
    cartService.clearCart();
    updateCart();
  }

  function handleIncreaseItem(productId: number) {
    cartService.increaseItem(productId);
    setCart(cartService.getCart());
  }

  function handleDecreaseItem(productId: number) {
    cartService.decreaseItem(productId);
    updateCart();
  }

  function updateCart(){
    const newCart = cartService.getCart();
    setCart(newCart);
    setContextCartCount(newCart.items.length);
  }

  function handleSaveOrderClick(){
    orderService.saveOrderRequest(cart)
      .then(response => {
        cartService.clearCart();
        setContextCartCount(0);
        navigate(`/cart/confirmation/${response.data.id}`)
      })
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
            <div className="cart-link">
              <PrimaryButton value="Finalizar pedido" onClick={handleSaveOrderClick}/>
            </div>
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
