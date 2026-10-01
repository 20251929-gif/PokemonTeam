import { Injectable, signal, computed} from '@angular/core';

export interface items {
    id: number;
    name: string;
    price: number;
}

@Injectable({ providedIn: 'root' })

export class PokeMart {
    // Items
    items = signal<items[]> ([
        {id: 1,name : 'Pokeball', price: 200},
        {id: 2,name : 'Great Ball', price: 600},
        {id: 3,name : 'Ultra Ball', price: 1200},
        {id: 4,name : 'Luxury Ball', price: 3000},
        {id: 5,name : 'Full Restore', price: 3000},
        {id: 6,name : 'Full Heal', price: 600},
        {id: 7,name : 'Escape Rope', price: 550},
        {id: 8,name : 'Max Elixir', price: 2250},
        {id: 9,name : 'Max Revive', price: 2000},
        {id: 10,name : 'PP up', price: 10000}
    ]);

    private cartItems = signal<items[]>([]);
    cart = this.cartItems.asReadonly();

    totalPrice = computed(() =>
    this.cartItems().reduce((sum, item) => sum + item.price, 0)
    );

    addToCart(product: items) {
    this.cartItems.update(current => [...current, product]);
    }   
    
    clearCart() {
        this.cartItems.set([]);
    }
}