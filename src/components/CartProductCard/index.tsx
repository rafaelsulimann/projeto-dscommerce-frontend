import { useState } from 'react';
import { OrderDTO, OrderItemDTO } from '../../models/order';
import * as cartService from '../../services/cart-service'
import './styles.scss';

type Props = {
  item : OrderItemDTO;
  increaseItem : any;
  decreaseItem : any;
}

export default function CartProductCard({item, increaseItem, decreaseItem} : Props) {

  return (
    <div key={item.productId} className="cart-product-card">
      <div className="cart-product-card-infos">
        <img src={item.imgUrl} alt={item.name} />
        <div className="name-and-quantity">
          <h3>{item.name}</h3>
          <div className="quantity-div">
            <span onClick={decreaseItem}>-</span>
            <p>{item.quantity}</p>
            <span onClick={increaseItem}>+</span>
          </div>
        </div>
      </div>
      <div className="cart-product-card-price">
        <h3><span>R$</span>{item.subTotal.toFixed(2)}</h3>
      </div>
    </div>
  );
}
