import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesSolicitacaoservicoComponent } from './detalhes-solicitacaoservico.component';

describe('DetalhesSolicitacaoservicoComponent', () => {
  let component: DetalhesSolicitacaoservicoComponent;
  let fixture: ComponentFixture<DetalhesSolicitacaoservicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesSolicitacaoservicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesSolicitacaoservicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
