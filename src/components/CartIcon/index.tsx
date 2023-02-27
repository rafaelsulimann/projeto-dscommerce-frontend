import { useContext, useState } from "react";
import cartImg from "../../assets/carrinho.svg";
import * as cartService from "../../services/cart-service";
import { ContextCartCount } from "../../utils/context-cart";
import "./styles.scss";

export default function CartIcon() {
  const { contextCartCount } = useContext(ContextCartCount);

  return (
    <>
      <img src={cartImg} alt="Carrinho" />
      {contextCartCount > 0 && (
        <div className="cart-count">{contextCartCount}</div>
      )}
    </>
  );
}
