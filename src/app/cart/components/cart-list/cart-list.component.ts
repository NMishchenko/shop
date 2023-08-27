import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductModel } from 'src/app/products/models/product.model';
import { ProductComponent } from "../../../products/components/product/product.component";
import { CartItemComponent } from "../cart-item/cart-item.component";
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'app-cart-list',
    standalone: true,
    templateUrl: './cart-list.component.html',
    styleUrls: ['./cart-list.component.scss'],
    imports: [CommonModule, ProductComponent, CartItemComponent]
})
export class CartListComponent {
  products!: ProductModel[];

  constructor(
    cartService: CartService
  ) {
    this.products = cartService.getProducts();
  }
}
