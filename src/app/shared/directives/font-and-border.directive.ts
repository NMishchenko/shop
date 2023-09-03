import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFontAndBorder]',
  standalone: true
})
export class FontAndBorderDirective {
  @Input() borderLineStyle!: string;
  @Input() fontSize!: number

  private availableBorderLineStyles: string[] = [
    "none",
    "solid",
    "dotted",
    "dashed",
    "double",
    "groove",
    "ridge"
  ]

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener("click") onClick(): void {
    let borderLineStyle = this.borderLineStyle;
    let fontSize = this.fontSize;

    if (this.availableBorderLineStyles.indexOf(borderLineStyle) === -1)
      borderLineStyle = this.availableBorderLineStyles[1];
    if (fontSize <= 5 || fontSize >= 40)
      fontSize = 16;

    this.renderer.setStyle(this.elementRef.nativeElement, "border", `1px ${borderLineStyle} black`);
    this.renderer.setStyle(this.elementRef.nativeElement, "font-size", `${fontSize}px`);
  }

}
