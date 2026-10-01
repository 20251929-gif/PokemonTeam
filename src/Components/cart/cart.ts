import { Component, inject } from '@angular/core';
import { PokeMart } from '../../app/pokemart';

@Component({
selector: 'app-cart',
standalone: true,
template: `
  <div style="border-top: 2px solid #000; padding: 10px;">
    <h3> Shopping Cart</h3>
    @for (item of pokemart.cart(); track $index) {
    <div>{{ item.name }} - ₱{{ item.price }}</div>
    } @empty {
    <p>Cart is empty.</p>
    }
    <hr>
    <h4>Total: ₱{{ pokemart.totalPrice() }}</h4>
    <button (click)="pokemart.clearCart()">Checkout / Clear</button>
  </div>
`
})
export class CartComponent {
pokemart = inject(PokeMart);
}