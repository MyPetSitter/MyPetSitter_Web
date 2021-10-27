import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacaoservicoCreateComponent } from './solicitacaoservico-create.component';

describe('SolicitacaoservicoCreateComponent', () => {
  let component: SolicitacaoservicoCreateComponent;
  let fixture: ComponentFixture<SolicitacaoservicoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitacaoservicoCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitacaoservicoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
