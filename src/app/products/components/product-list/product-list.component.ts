import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from "../product/product.component";
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
    selector: 'app-product-list',
    standalone: true,
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
    imports: [CommonModule, ProductComponent]
})
export class ProductListComponent {
  products!: ProductModel[];

  constructor(
    productService: ProductService
  ) {
    this.products = productService.getProducts();
  }
}
