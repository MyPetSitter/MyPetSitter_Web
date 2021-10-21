import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterpsComponent } from './footerps.component';

describe('FooterpsComponent', () => {
  let component: FooterpsComponent;
  let fixture: ComponentFixture<FooterpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
