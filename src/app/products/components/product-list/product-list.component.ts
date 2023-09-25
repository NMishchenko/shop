import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from "../product/product.component";
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { CartService } from 'src/app/cart/services/cart.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-product-list',
    standalone: true,
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
    imports: [CommonModule, ProductComponent]
})
export class ProductListComponent {
  products!: Observable<ProductModel[]>;

  constructor(
    productService: ProductService,
    private cartService: CartService
  ) {
    // эту операцию можно было бы выполнить в ngOnInit
    this.products = productService.getProducts();
  }

  addToCart(product: ProductModel): void {
    this.cartService.addCartItem(product.name);
  }
}
