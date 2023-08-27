import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { Category } from 'src/app/shared/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: ProductModel[] = [
    new ProductModel("Quantum computer", "A quantum computer is a computer that exploits quantum mechanical phenomena. At small scales, physical matter exhibits properties of both particles and waves, and quantum computing leverages this behavior, specifically quantum superposition and entanglement, using specialized hardware that supports the preparation and manipulation of quantum states.", Number.MAX_VALUE, Category.Electronics, false),
    new ProductModel("Big Mac", "The Big Mac is a hamburger sold by the international fast food restaurant chain McDonald's. The Big Mac contains two beef patties, cheese, shredded lettuce, pickles, minced onions, and a Thousand Island-type dressing advertised as \"special sauce\", on a three-slice sesame-seed bun.", 7.79, Category.Food, true),
    new ProductModel("DumbBell Set", "NEW EDITION with robust packaging to ensure great condition; Each dumbbell features hex shaped heads to prevent rolling; Medium depth knurling on the ergo handle provides essential grip and security during use; Coating is extremely durable.", 189.99, Category.Home, true),
  ];

  constructor() { }

  getProducts(): ProductModel[] {
    return this.products;
  }

  getProductByName(name: string): ProductModel | undefined {
    return this.products.find(product => product.name == name);
  }
}
