import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderclComponent } from './headercl.component';

describe('HeaderclComponent', () => {
  let component: HeaderclComponent;
  let fixture: ComponentFixture<HeaderclComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderclComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderclComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
