import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicopetsitterCreateComponent } from './servicopetsitter-create.component';

describe('ServicopetsitterCreateComponent', () => {
  let component: ServicopetsitterCreateComponent;
  let fixture: ComponentFixture<ServicopetsitterCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicopetsitterCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicopetsitterCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
