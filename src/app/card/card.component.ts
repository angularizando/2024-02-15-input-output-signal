import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  template: `<div>
    <h2>{{ title }}</h2>
    <p>{{ price }}</p>
    <p>{{ hasDiscount ? 'com desconto' : '' }}</p>
    <input disabled />
  </div>`
})
export class CardComponent {
  @Input({ required: true }) title!: string;

  #price = 0;
  @Input() set price(value: string | number) { 
    if (typeof value === 'number') {
      this.#price = value;
    } else if (isNaN(Number(value))) {
      this.#price = 0;
    } else {
      this.#price = Number(value);
    }
  }
  get price(): number {
    return this.#price;
  }

  #hasDiscount = false;
  @Input() set hasDiscount(value: string | boolean) {
    this.#hasDiscount = typeof value === 'boolean' ?  value : true;
  }
  get hasDiscount(): boolean {
    return this.#hasDiscount;
  }
}
