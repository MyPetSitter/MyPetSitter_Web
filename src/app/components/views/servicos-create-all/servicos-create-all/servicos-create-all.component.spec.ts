import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosCreateAllComponent } from './servicos-create-all.component';

describe('ServicosCreateAllComponent', () => {
  let component: ServicosCreateAllComponent;
  let fixture: ComponentFixture<ServicosCreateAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicosCreateAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicosCreateAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
