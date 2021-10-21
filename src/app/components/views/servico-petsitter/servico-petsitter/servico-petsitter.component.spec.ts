import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoPetsitterComponent } from './servico-petsitter.component';

describe('ServicoPetsitterComponent', () => {
  let component: ServicoPetsitterComponent;
  let fixture: ComponentFixture<ServicoPetsitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicoPetsitterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoPetsitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
