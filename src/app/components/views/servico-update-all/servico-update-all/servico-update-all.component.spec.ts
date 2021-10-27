import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoUpdateAllComponent } from './servico-update-all.component';

describe('ServicoUpdateAllComponent', () => {
  let component: ServicoUpdateAllComponent;
  let fixture: ComponentFixture<ServicoUpdateAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicoUpdateAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoUpdateAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
