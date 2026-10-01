import { Service } from '@angular/core';
import { Injectable, signal } from '@angular/core';

export interface PokemonProfile {
  pokemon: string;
  region: string;
  type: string;
  heldItem: string;
  desc: string;
}

@Injectable({ providedIn: 'root' })

export class FavoritePokemon {
  private team = signal([
    {
        pokemon: 'Breloom',
        region: 'Hoenn',
        type: 'Grass/Fighting',
        heldItem: 'Toxic Orb',
        desc: 'Punchy Shroom',
    },

    {
        pokemon: 'Rayquaza',
        region: 'Hoenn',
        type: 'Dragon/Flying',
        heldItem: 'None',
        desc: 'Sky Dragon go brrrr',
    },

    {
        pokemon: 'Gengar',
        region: 'Kanto',
        type: 'Ghost/Poison',
        heldItem: 'None',
        desc: 'Boo',
    },

    {
        pokemon: 'Wooper',
        region: 'Johto',
        type: 'Water/Ground',
        heldItem: 'Everstone',
        desc: 'Woop',
    },

    {
        pokemon: 'Lugia',
        region: 'Johto',
        type: 'Psychic/Flying',
        heldItem: 'None',
        desc: 'Aeroblast hurts',
    },

    {
        pokemon: 'Tyranitar',
        region: 'Johto',
        type: 'Rock/Dark',
        heldItem: 'Leftovers',
        desc: 'SAAAAAAANNNNNNNNDDDDDDD',
    },

    {
        pokemon: 'Swampert',
        region: 'Hoenn',
        type: 'Water/Ground',
        heldItem: 'None',
        desc: 'Mud...',
    },

    {
        pokemon: 'Gardevoir',
        region: 'Hoenn',
        type: 'Psychic',
        heldItem: 'None',
        desc: 'Calm Mind Sweeps',
    },

    {
        pokemon: 'Wailord',
        region: 'Hoenn',
        type: 'Water',
        heldItem: 'None',
        desc: 'Big WHAAAAAAAALEEEEEEEE',
    },

    {
        pokemon: 'Shellgon',
        region: 'Hoenn',
        type: 'Dragon',
        heldItem: 'None',
        desc: 'Shy boy',
    },

    

    
  ]);
  pokemonteam = this.team.asReadonly();
}
