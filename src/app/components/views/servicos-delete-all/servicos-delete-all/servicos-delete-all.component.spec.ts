import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosDeleteAllComponent } from './servicos-delete-all.component';

describe('ServicosDeleteAllComponent', () => {
  let component: ServicosDeleteAllComponent;
  let fixture: ComponentFixture<ServicosDeleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicosDeleteAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicosDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
