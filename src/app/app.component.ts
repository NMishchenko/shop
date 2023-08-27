import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NgSwitch, NgSwitchDefault, NgSwitchCase } from '@angular/common';

import { FirstComponent } from './first/first.component';
import { ProductListComponent } from "./products/components/product-list/product-list.component";
import { CartListComponent } from "./cart/components/cart-list/cart-list.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [NgSwitch, NgSwitchDefault, NgSwitchCase, FirstComponent, ProductListComponent, CartListComponent]
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle') private childComponentRef!: ElementRef<HTMLHeadingElement>;

  title = 'shop';

  ngAfterViewInit(): void {
    this.childComponentRef.nativeElement.textContent = "Sus Shop";
  }
}
