import { TestBed } from '@angular/core/testing';
import { Favoritepokemon } from './favoritepokemon';

describe('Favoritepokemon', () => {
  let service: Favoritepokemon;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Favoritepokemon);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
