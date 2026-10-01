import { Component, inject } from '@angular/core';
import { PokeMart } from './pokemart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  template: `
    <div style="border-top: 2px solid #000; padding: 10px;">
      <h3>Shopping Cart</h3>
      
      @for (item of pokemart.cart(); track item.id) {
        <div>
          {{ item.name }} 
          @if (item.quantity > 1) { (x{{ item.quantity }}) } 
          - ₱{{ item.price * (item.quantity || 1) }}
        </div>
      } @empty {
        <p>Cart is empty.</p>
      }
      
      <hr>
      <h4>Total: ₱{{ pokemart.total() }}</h4>
      <button (click)="pokemart.clearCart()">Checkout / Clear</button>
    </div>
  `
})
export class CartComponent {
  pokemart = inject(PokeMart);
}
