import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductModel } from 'src/app/products/models/product.model';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() product!: ProductModel;
  @Output() removeCartItemEvent = new EventEmitter<string>();

  onRemoveFromCart(): void {
    this.removeCartItemEvent.emit(this.product.name);
  }
}
