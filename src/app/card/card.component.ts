import { booleanAttribute, Component, Input, numberAttribute } from '@angular/core';

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
  @Input({ transform: (value: string) => value.toLocaleUpperCase() }) title!: string;
  @Input({ transform: numberAttribute }) price: number = 0;
  @Input({ transform: booleanAttribute }) hasDiscount: boolean = false;
}
