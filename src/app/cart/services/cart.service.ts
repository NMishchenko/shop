import { Injectable } from '@angular/core';

import { ProductService } from 'src/app/products/services/product.service';
import { CartItemModel } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItemModel[] = [];
  
  constructor(
    private productService: ProductService
  ) { }

  getCartItems(): CartItemModel[] {
    return this.cartItems;
  }

  getTotalCost(): number {
    const totalCost = this.cartItems.reduce((costSum, cartItem) => {
      return costSum + cartItem.product.price * cartItem.quantity;
    }, 0);
    return Math.round(totalCost * 100) / 100;
  }

  getTotalQuantity(): number {
    const totalQuantity = this.cartItems.reduce((quantitySum, cartItem) => quantitySum + cartItem.quantity, 0);
    return totalQuantity;
  }

  addCartItem(name: string): void {
    const product = this.productService.getProductByName(name);
    if (!product) return;

    let cartItem = this.cartItems.find(cartItem => cartItem.product == product);
    if (cartItem) {
      cartItem.quantity++;
    }
    else {
      cartItem = new CartItemModel(product, 1);
      this.cartItems.push(cartItem);
    }
  }

  removeCartItem(name: string): void {
    const product = this.productService.getProductByName(name);
    if (!product) return;

    const cartItemIndex = this.cartItems.findIndex(cartItem => cartItem.product.name == name);

    if (cartItemIndex !== -1)
      this.cartItems.splice(cartItemIndex, 1);
  }

  decreaseCartItemQuantity(name: string): void {
    const product = this.productService.getProductByName(name);
    if (!product) return;

    let cartItem = this.cartItems.find(cartItem => cartItem.product.name == name);
    if (!cartItem) return;

    cartItem.quantity--;
  }
}
