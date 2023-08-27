import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from "../../../products/components/product/product.component";
import { CartItemComponent } from "../cart-item/cart-item.component";
import { CartService } from '../../services/cart.service';
import { CartItemModel } from '../../models/cart-item.model';

@Component({
    selector: 'app-cart-list',
    standalone: true,
    templateUrl: './cart-list.component.html',
    styleUrls: ['./cart-list.component.scss'],
    imports: [CommonModule, ProductComponent, CartItemComponent]
})
export class CartListComponent {
  cartItems!: CartItemModel[];

  constructor(
    public cartService: CartService
  ) {
    this.cartItems = cartService.getCartItems();
  }

  removeFromCart(productName: string): void {
    this.cartService.removeCartItem(productName);
  }
}
