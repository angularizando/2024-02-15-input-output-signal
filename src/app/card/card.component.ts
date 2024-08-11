import { booleanAttribute, Component, computed, effect, input, Input, numberAttribute, Signal } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  template: `<div>
    <h2>{{ title() }}</h2>
    <h2>{{ upperCaseTitle() }}</h2>
    <p>{{ price }}</p>
    <p>{{ hasDiscount ? 'com desconto' : '' }}</p>
    <input disabled />
  </div>`
})
export class CardComponent {
  title = input.required<string>();
  upperCaseTitle = computed(() => this.title().toLocaleUpperCase());
  @Input({ transform: numberAttribute }) price: number = 0;
  @Input({ transform: booleanAttribute }) hasDiscount: boolean = false;

  constructor() {
    effect(() => {
      if (this.title()) {
        console.log(this.title())
      }
    })
  }
}
