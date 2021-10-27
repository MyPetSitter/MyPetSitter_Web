import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoCreateAllComponent } from './servico-create-all.component';

describe('ServicoCreateAllComponent', () => {
  let component: ServicoCreateAllComponent;
  let fixture: ComponentFixture<ServicoCreateAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicoCreateAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoCreateAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
