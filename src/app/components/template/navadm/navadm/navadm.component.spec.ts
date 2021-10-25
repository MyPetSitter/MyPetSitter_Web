import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavadmComponent } from './navadm.component';

describe('NavadmComponent', () => {
  let component: NavadmComponent;
  let fixture: ComponentFixture<NavadmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavadmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavadmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
