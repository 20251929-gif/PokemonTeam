import { Service } from '@angular/core';
import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class FavoritePokemon {
  private team = signal([
    {
        pokemon: '',
        type: '',
        heldItem: '',
        desc: '',
    },

    {
        pokemon: '',
        type: '',
        heldItem: '',
        desc: '',
    },

    {
        pokemon: '',
        type: '',
        heldItem: '',
        desc: '',
    },

    {
        pokemon: '',
        type: '',
        heldItem: '',
        desc: '',
    },

    {
        pokemon: '',
        type: '',
        heldItem: '',
        desc: '',
    },

    {
        pokemon: '',
        type: '',
        heldItem: '',
        desc: '',
    }
  ]);
  pokemonteam = this.team.asReadonly();
}
