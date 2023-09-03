import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @HostBinding('style.background-color') color!: string;

  @HostListener("mouseenter") onMouseEnter() {
    this.color = "#fffcac";
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.color = "";
  }

  constructor() { }

}
