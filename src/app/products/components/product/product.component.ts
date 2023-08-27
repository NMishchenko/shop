import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModel } from '../../models/product.model';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product!: ProductModel;

  constructor(
    private cartService: CartService
  ) {}

  onAddToCart(): void {
    console.log(`The product ${this.product.name} is bought`);
    this.cartService.addCartItem(this.product.name);
  }
}
