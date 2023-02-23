import { OrderDTO, OrderItemDTO } from "../models/order";
import { CART_KEY, EMPTY_CART } from "../utils/system";

export function save(cart : OrderDTO) {
    const cartString = JSON.stringify(cart);
    localStorage.setItem(CART_KEY, cartString);
}

export function get() : OrderDTO {
    const cartObj = JSON.parse(localStorage.getItem(CART_KEY) || EMPTY_CART) as OrderDTO;
    const cart = new OrderDTO();
    cartObj.items.forEach(item => {
        cart.items.push(new OrderItemDTO(item.productId, item.quantity, item.name, item.price, item.imgUrl));
    })
    return cart;
}

export function clear() {
    localStorage.setItem(CART_KEY, EMPTY_CART);
}