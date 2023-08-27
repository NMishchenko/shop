import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/products/models/product.model';
import { ProductService } from 'src/app/products/services/product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products: ProductModel[] = [];
  
  constructor(
    private productService: ProductService
  ) { }

  getProducts(): ProductModel[] {
    return this.products;
  }

  addCartItem(name: string) {
    const item = this.productService.getProductByName(name);
    
    if (item) {
      this.products.push(item);
    }
  }

  removeCartItem(name: string) {
    const item = this.productService.getProductByName(name);
    
    if (item) {
      const cartItemIndex = this.products.findIndex(product => product.name == name);

      if (cartItemIndex !== -1)
        this.products.splice(cartItemIndex, 1);
    }
  }
}
