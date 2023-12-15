import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appPriceFilter]',
  standalone: true
})
export class PriceFilterDirective {

  private maxPrice: number | undefined;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @Input() set appPriceFilter(value: { maxPrice: number }) {
    this.maxPrice = value.maxPrice;
    this.updateDisplay();
  }

  ngOnInit() {
    this.updateDisplay();
  }

  private updateDisplay() {
    const priceElement = this.el.nativeElement.querySelector('.price');

    if (priceElement && priceElement.textContent !== null) {
      const match = priceElement.textContent.match(/\d+/);
      const price = match ? parseInt(match[0], 10) : NaN;

      if (this.maxPrice !== undefined && !isNaN(price)) {
        if (price > this.maxPrice) {
          this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
        } else {
          this.renderer.setStyle(this.el.nativeElement, 'display', 'block');
        }
      }
    }
  }
}
