import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoCriarUmaContaComponent } from './como-criar-uma-conta.component';

describe('ComoCriarUmaContaComponent', () => {
  let component: ComoCriarUmaContaComponent;
  let fixture: ComponentFixture<ComoCriarUmaContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComoCriarUmaContaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComoCriarUmaContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
