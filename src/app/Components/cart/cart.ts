import { Component, inject } from '@angular/core'; 
import { PokeMart } from '../../pokemart'; 

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
  `,styles: [`
    .cart-container {
      border-top: 4px solid #ef5350; 
      padding: 24px;
      max-width: 500px;
      margin: 40px auto;
      background: #ffffff;
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }

    .cart-container h3 {
      margin-top: 0;
      margin-bottom: 20px;
      font-size: 1.5rem;
      color: #1a202c;
      border-bottom: 2px solid #edf2f7;
      padding-bottom: 12px;
    }

    .cart-items-wrapper {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 20px;
    }

    .cart-item-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 16px;
      background-color: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      color: #2d3748;
      font-weight: 500;
    }

    .item-price {
      font-weight: bold;
      color: #4a5568;
    }

    .empty-msg {
      color: #718096;
      text-align: center;
      padding: 20px 0;
      font-style: italic;
      margin: 0;
    }

    hr {
      border: 0;
      border-top: 1px solid #e2e8f0;
      margin: 16px 0;
    }

    .total-summary {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }

    .total-summary h4 {
      margin: 0;
      font-size: 1.25rem;
      color: #1a202c;
    }

    .total-amount {
      font-size: 1.35rem;
      font-weight: bold;
      color: #ef5350;
    }

    .checkout-btn {
      width: 100%;
      background-color: #ef5350;
      color: white;
      border: none;
      padding: 12px;
      border-radius: 8px;
      font-weight: bold;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.2s ease;
    }

    .checkout-btn:hover {
      background-color: #dc2626;
    }
  `]
}) 
export class CartComponent { 
  pokemart = inject(PokeMart); 
}
