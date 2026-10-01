import { Component, inject } from '@angular/core';
import { PokeMart } from '../../pokemart';

@Component({
  selector: 'app-menu',
  standalone: true,
  template: `
    <div class="page">
      <h1>PokéMart</h1>

      <div class="team-container">
        @for (items of pokemart.items(); track items.id) {
          <section class="card">
            <h2>{{ items.name }}</h2>
            <p class="price-row"><strong>Price:</strong> <span class="price-tag">₱{{ items.price }}</span></p>
            <p class="desc"><em>"Essential gear for your training journey."</em></p>
            <button class="buy-btn" (click)="pokemart.addToCart(items)">Add to Cart</button>
          </section>
        }
      </div>
    </div>
  `,
  styles: [`

    .page {
      max-width: 1400px;
      margin: 0 auto;
      padding: 24px;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }

    .page h1 {
      text-align: center;
      color: #222222;
      margin-bottom: 32px;
      font-size: 2.5rem;
    }

  
    .team-container {
      display: grid;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      gap: 20px;
    }


    .card {
      background-color: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .card:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    }

    .card h2 {
      margin: 0 0 12px 0;
      font-size: 1.3rem;
      color: #1a202c;
      border-bottom: 2px solid #edf2f7;
      padding-bottom: 8px;
    }

    .price-row {
      margin: 6px 0;
      font-size: 0.95rem;
      color: #4a5568;
    }

    .price-tag {
      font-weight: bold;
      color: #ef5350; 
      font-size: 1.1rem;
    }

    .card .desc {
      margin-top: 4px;
      margin-bottom: 20px;
      font-size: 0.85rem;
      color: #718096;
      line-height: 1.4;
      flex-grow: 1;
    }

    .buy-btn {
      width: 100%;
      background-color: #3b82f6;
      color: white;
      border: none;
      padding: 10px;
      border-radius: 8px;
      font-weight: 600;
      font-size: 0.9rem;
      cursor: pointer;
      margin-top: auto;
      transition: background-color 0.2s ease;
    }

    .buy-btn:hover {
      background-color: #2563eb;
    }

    @media (max-width: 1200px) {
      .team-container { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    }
    @media (max-width: 768px) {
      .team-container { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    }
    @media (max-width: 480px) {
      .team-container { grid-template-columns: repeat(1, minmax(0, 1fr)); }
    }
  `]
})
export class MartComponent {
  pokemart = inject(PokeMart);
}
