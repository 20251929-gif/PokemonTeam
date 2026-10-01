import { TestBed } from '@angular/core/testing';
import { Pokemart } from './pokemart';

describe('Pokemart', () => {
  let service: Pokemart;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pokemart);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
