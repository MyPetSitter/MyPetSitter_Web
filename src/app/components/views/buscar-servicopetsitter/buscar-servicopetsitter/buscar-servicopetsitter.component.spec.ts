import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarServicopetsitterComponent } from './buscar-servicopetsitter.component';

describe('BuscarServicopetsitterComponent', () => {
  let component: BuscarServicopetsitterComponent;
  let fixture: ComponentFixture<BuscarServicopetsitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarServicopetsitterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarServicopetsitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
