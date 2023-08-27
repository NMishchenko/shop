import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartItemModel } from '../../models/cart-item.model';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() cartItem!: CartItemModel;

  @Output() removeCartItemEvent = new EventEmitter<string>();
  @Output() decreaseQuantity = new EventEmitter<string>();
  @Output() increaseQuantity = new EventEmitter<string>();

  onRemoveFromCart(): void {
    this.removeCartItemEvent.emit(this.cartItem.product.name);
  }

  onQuantityDecrease(): void {
    if (this.cartItem.quantity > 1)
      this.decreaseQuantity.emit(this.cartItem.product.name);
  }

  onQuantityIncrease(): void {
    this.increaseQuantity.emit(this.cartItem.product.name);
  }

  getTotalPrice(): number {
    const totalPrice = this.cartItem.product.price * this.cartItem.quantity;
    return Math.round(totalPrice * 100) / 100;
  }
}
