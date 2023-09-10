import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from "../../../products/components/product/product.component";
import { CartItemComponent } from "../cart-item/cart-item.component";
import { CartService } from '../../services/cart.service';
import { CartItemModel } from '../../models/cart-item.model';
import { OrderByPipe } from "../../../shared/pipes/order-by.pipe";

@Component({
    selector: 'app-cart-list',
    standalone: true,
    templateUrl: './cart-list.component.html',
    styleUrls: ['./cart-list.component.scss'],
    imports: [CommonModule, ProductComponent, CartItemComponent, OrderByPipe]
})
export class CartListComponent {
  sortOptions: string[] = ["none", "product.price", "quantity", "product.name"];
  cartItems!: CartItemModel[];
  currentSortOption: string = this.sortOptions[0];
  currentIsAscending: boolean = false;

  constructor(
    public cartService: CartService
  ) {
    this.cartItems = cartService.getCartItems();
  }

  removeFromCart(productName: string): void {
    this.cartService.removeCartItem(productName);
  }

  decreaseQuantity(productName: string): void {
    this.cartService.decreaseCartItemQuantity(productName);
  }

  increaseQuantity(productName: string): void {
    this.cartService.addCartItem(productName);
  }

  onSortOptionChanged(sortOption: string): void {
    this.currentSortOption = sortOption;
  }

  onAscendingCheckboxChanged(isAscending: boolean): void {
    this.currentIsAscending = isAscending;
  }
}
