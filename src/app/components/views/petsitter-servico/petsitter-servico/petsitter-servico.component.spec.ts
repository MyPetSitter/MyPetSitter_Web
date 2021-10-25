import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsitterServicoComponent } from './petsitter-servico.component';

describe('PetsitterServicoComponent', () => {
  let component: PetsitterServicoComponent;
  let fixture: ComponentFixture<PetsitterServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetsitterServicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsitterServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
