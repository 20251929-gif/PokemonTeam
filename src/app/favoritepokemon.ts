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
        desc: 'Punchy Shroom, The Mushroom Pokémon. It loves warm, humid climates and is known for its incredible boxing technique. It closes in on enemies with light, virtually invisible footwork and then stretches its nimble arms to unleash a flurry of devastating, rapid-fire punches.',
    },

    {
        pokemon: 'Rayquaza',
        region: 'Hoenn',
        type: 'Dragon/Flying',
        heldItem: 'None',
        desc: 'Sky Dragon go brrrr, The Sky High Pokémon. It has lived for hundreds of millions of years deep within the earths ozone layer, flying endlessly and feeding on moisture and meteoroids. Because it stays so high in the sky, its existence was a complete mystery to humans for ages.',
    },

    {
        pokemon: 'Gengar',
        region: 'Kanto',
        type: 'Ghost/Poison',
        heldItem: 'None',
        desc: 'Boo,  The Shadow Pokémon. A mischievous spirit that hides perfectly inside the shadows of people or objects at night. If you feel a sudden, unnatural drop in temperature around you, it means a Gengar has appeared nearby and is absorbing the ambient heat.',
    },

    {
        pokemon: 'Wooper',
        region: 'Johto',
        type: 'Water/Ground',
        heldItem: 'Everstone',
        desc: 'Woop,  The Water Fish Pokémon. It usually lives in cold water, but it will occasionally venture onto land at night when the air cools down to hunt for food. When walking on land, it coats its skin in a slimy, highly toxic film that keeps it from drying out and paralyzes predators who touch it.',
    },

    {
        pokemon: 'Lugia',
        region: 'Johto',
        type: 'Psychic/Flying',
        heldItem: 'None',
        desc: 'Aeroblast hurts, The Diving Pokémon. It is the legendary guardian of the seas. Lugia possesses such immense power that a simple flap of its wings can trigger light storms or blow apart houses, leading it to isolate itself deep at the bottom of the ocean to prevent accidental destruction.',
    },

    {
        pokemon: 'Tyranitar',
        region: 'Johto',
        type: 'Rock/Dark',
        heldItem: 'Leftovers',
        desc: 'SAAAAAAANNNNNNNNDDDDDDD, The Armor Pokémon. It has an incredibly hard, virtually indestructible body that can take any attack without flinching. It is so brutally powerful that it can easily topple entire mountains, forcing cartographers to redraw regional maps after it rampages through an area.',
    },

    {
        pokemon: 'Swampert',
        region: 'Hoenn',
        type: 'Water/Ground',
        heldItem: 'None',
        desc: 'Mud..., The Mud Fish Pokémon. It boasts immense physical strength and is powerful enough to easily drag boulders weighing over a ton. It has highly acute vision that allows it to see perfectly even in muddy, murky waters, and its webbed fins can detect the subtle movements of ocean waves.',
    },

    {
        pokemon: 'Gardevoir',
        region: 'Hoenn',
        type: 'Psychic',
        heldItem: 'None',
        desc: 'Calm Mind Sweeps, The Embrace Pokémon. It has the psychokinetic ability to distort dimensions and even create small black holes using its psychic energy. It is fiercely loyal and will expend its entire life force if necessary to protect its trusted Trainer from danger.',
    },

    {
        pokemon: 'Wailord',
        region: 'Hoenn',
        type: 'Water',
        heldItem: 'None',
        desc: 'Big WHAAAAAAAALEEEEEEEE, The Float Whale Pokémon. It is one of the largest known Pokémon species in existence. Despite its colossal, massive size, it actually floats lightly on the ocean surface because its internal body density is remarkably low, allowing it to easily breach and leap out of the water.',
    },

    {
        pokemon: 'Shellgon',
        region: 'Hoenn',
        type: 'Dragon',
        heldItem: 'None',
        desc: 'Shy boy, The Endurance Pokémon. It is the intermediate stage of its evolution line, encased in a hard, bone-like shell structure that repels all enemy attacks. Because the shell is extremely heavy, its movements are sluggish, and it spends most of its time hidden away in caves waiting to evolve.'
    },

    

    
  ]);
  pokemonteam = this.team.asReadonly();
}
