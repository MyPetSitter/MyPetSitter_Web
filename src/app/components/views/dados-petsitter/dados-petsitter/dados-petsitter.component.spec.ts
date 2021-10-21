import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosPetsitterComponent } from './dados-petsitter.component';

describe('DadosPetsitterComponent', () => {
  let component: DadosPetsitterComponent;
  let fixture: ComponentFixture<DadosPetsitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosPetsitterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosPetsitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
