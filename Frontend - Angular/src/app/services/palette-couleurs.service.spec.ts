import { TestBed } from '@angular/core/testing';

import { PaletteCouleursService } from './palette-couleurs.service';

describe('PaletteCouleursService', () => {
  let service: PaletteCouleursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaletteCouleursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
