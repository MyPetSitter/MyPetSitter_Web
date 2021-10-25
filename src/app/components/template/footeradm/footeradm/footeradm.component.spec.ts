import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooteradmComponent } from './footeradm.component';

describe('FooteradmComponent', () => {
  let component: FooteradmComponent;
  let fixture: ComponentFixture<FooteradmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooteradmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooteradmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
