import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterclComponent } from './footercl.component';

describe('FooterclComponent', () => {
  let component: FooterclComponent;
  let fixture: ComponentFixture<FooterclComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterclComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterclComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
