import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaletteCouleursComponent } from './palette-couleurs.component';

describe('PaletteCouleursComponent', () => {
  let component: PaletteCouleursComponent;
  let fixture: ComponentFixture<PaletteCouleursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaletteCouleursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaletteCouleursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
