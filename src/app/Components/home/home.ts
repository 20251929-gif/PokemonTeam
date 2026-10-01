import { Component, inject } from '@angular/core';
import { FavoritePokemon } from '../../favoritepokemon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  private pokemonService = inject(FavoritePokemon);
  pokemonTeam = this.pokemonService.pokemonteam;
}
