import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardComponent],
  template: `
    <app-card 
      [title]="title" 
      price="60" 
      hasDiscount />
  `,
})
export class AppComponent {
  title = 'Produto1';
  price = 20;
  hasDiscount = true;
}
