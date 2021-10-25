import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosReadAllComponent } from './servicos-read-all.component';

describe('ServicosReadAllComponent', () => {
  let component: ServicosReadAllComponent;
  let fixture: ComponentFixture<ServicosReadAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicosReadAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicosReadAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
