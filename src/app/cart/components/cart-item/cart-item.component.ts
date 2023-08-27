import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModel } from 'src/app/products/models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() product!: ProductModel;

  constructor(
    public cartService: CartService
  ) {}
}
