import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavpsComponent } from './navps.component';

describe('NavpsComponent', () => {
  let component: NavpsComponent;
  let fixture: ComponentFixture<NavpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
