import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product!: ProductModel;
  @Output() newCartItemEvent = new EventEmitter<ProductModel>();

  onAddToCart(): void {
    console.log(`The product ${this.product.name} is bought`);
    this.newCartItemEvent.emit(this.product);
  }
}
