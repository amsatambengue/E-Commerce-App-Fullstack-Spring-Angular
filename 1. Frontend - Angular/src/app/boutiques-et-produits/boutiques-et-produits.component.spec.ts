import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutiquesEtProduitsComponent } from './boutiques-et-produits.component';

describe('BoutiquesEtProduitsComponent', () => {
  let component: BoutiquesEtProduitsComponent;
  let fixture: ComponentFixture<BoutiquesEtProduitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoutiquesEtProduitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutiquesEtProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
