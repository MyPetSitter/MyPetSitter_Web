import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderpsComponent } from './headerps.component';

describe('HeaderpsComponent', () => {
  let component: HeaderpsComponent;
  let fixture: ComponentFixture<HeaderpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
