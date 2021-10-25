import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateServicopetsitterComponent } from './update-servicopetsitter.component';

describe('UpdateServicopetsitterComponent', () => {
  let component: UpdateServicopetsitterComponent;
  let fixture: ComponentFixture<UpdateServicopetsitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateServicopetsitterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateServicopetsitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
