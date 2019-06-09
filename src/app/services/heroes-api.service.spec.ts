import { TestBed } from '@angular/core/testing';

import { HeroesApiService } from './heroes-api.service';

describe('HeroesApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroesApiService = TestBed.get(HeroesApiService);
    expect(service).toBeTruthy();
  });
});
