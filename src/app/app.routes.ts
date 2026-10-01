import { Routes } from '@angular/router';
import { Home } from './Components/home/home';
import { MartComponent } from './Components/mart/mart';
import { CartComponent } from './Components/cart/cart';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'mart', component: MartComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', redirectTo: '' }
];
