import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosdisponiveisComponent } from './servicosdisponiveis.component';

describe('ServicosdisponiveisComponent', () => {
  let component: ServicosdisponiveisComponent;
  let fixture: ComponentFixture<ServicosdisponiveisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicosdisponiveisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicosdisponiveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
