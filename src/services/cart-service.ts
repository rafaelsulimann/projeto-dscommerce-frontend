import * as cartRepository from '../localstorage/cart-repository'
import { OrderDTO, OrderItemDTO } from '../models/order';
import { ProductDTO } from '../models/product';

export function saveCart(cart : OrderDTO){
    cartRepository.save(cart);
}

export function getCart() : OrderDTO {
    return cartRepository.get();
}

export function addProduct(product : ProductDTO) {
    const cart = cartRepository.get();
    const existsItem = cart.items.find(item => item.productId === product.id);
    if(!existsItem){
        cart.items.push(new OrderItemDTO(product.id, 1, product.name, product.price, product.imgUrl));
        cartRepository.save(cart);
    }
}

export function clearCart() {
    cartRepository.clear();
}

export function increaseItem(productId : number) {
    const cart = cartRepository.get();
    const item = cart.items.find(item => item.productId === productId);
    if(item && item.quantity >= 1) {
        item.quantity++;
        cartRepository.save(cart);
    }
}

export function decreaseItem(productId : number) {
    const cart = cartRepository.get();
    const item = cart.items.find(item => item.productId === productId);
    if(item && item.quantity >= 2) {
        item.quantity--;
        cartRepository.save(cart);
    }
}