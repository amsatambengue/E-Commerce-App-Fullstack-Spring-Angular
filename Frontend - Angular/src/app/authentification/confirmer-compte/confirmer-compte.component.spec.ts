import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmerCompteComponent } from './confirmer-compte.component';

describe('ConfirmerCompteComponent', () => {
  let component: ConfirmerCompteComponent;
  let fixture: ComponentFixture<ConfirmerCompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmerCompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmerCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
