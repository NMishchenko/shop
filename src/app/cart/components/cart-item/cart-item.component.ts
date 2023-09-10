import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartItemModel } from '../../models/cart-item.model';
import { HighlightDirective } from 'src/app/shared/directives/highlight.directive';
import { FontAndBorderDirective } from 'src/app/shared/directives/font-and-border.directive';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule, HighlightDirective, FontAndBorderDirective],
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
    return totalPrice;
  }
}
