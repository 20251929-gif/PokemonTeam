import { Component, inject } from '@angular/core';
import { PokeMart } from './pokemart';

@Component({
  selector: 'app-menu',
  standalone: true,
  template: `
    <div class="menu-container">
      <h2>PokeMart Items</h2>
      <ul class="item-list">
        @for (item of pokemart.items(); track item.id) {
          <li class="item-row">
            <span class="item-info">
              <strong>{{ item.name }}</strong> — ₱{{ item.price | number }}
            </span>
            <button class="add-btn" (click)="pokemart.addToCart(item)">
              Add to Cart
            </button>
          </li>
        }
      </ul>
    </div>
  `,
  styles: [`
    .menu-container {
      max-width: 400px;
      margin: 20px auto;
      padding: 16px;
      border: 1px solid #ccc;
      border-radius: 8px;
      font-family: sans-serif;
    }
    .item-list {
      list-style: none;
      padding: 0;
    }
    .item-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 0;
      border-bottom: 1px solid #eee;
    }
    .add-btn {
      background-color: #ffcc00;
      border: 1px solid #333;
      padding: 6px 12px;
      border-radius: 4px;
      cursor: pointer;
      font-weight: bold;
    }
    .add-btn:hover {
      background-color: #e6b800;
    }
  `]
})
export class MenuComponent {
  protected pokemart = inject(PokeMart);
}
