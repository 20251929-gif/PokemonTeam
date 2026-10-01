import { Component, inject } from '@angular/core';
import { PokeMart } from '../../app/pokemart';

@Component({
selector: 'app-menu',
standalone: true,
template: `
  <div class="menu">
  <h2> Pokemart items</h2>
  @for (items of pokemart.items(); track items.id) {
  <p>
  {{ items.name }} - ₱{{ items.price }}
  <button (click)="pokemart.addToCart(items)">Add to Cart</button>
  </p>
  }
  </div>
`
})
export class MartComponent {
pokemart = inject(PokeMart);
}