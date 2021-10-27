import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioDeleteAllComponent } from './usuario-delete-all.component';

describe('UsuarioDeleteAllComponent', () => {
  let component: UsuarioDeleteAllComponent;
  let fixture: ComponentFixture<UsuarioDeleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioDeleteAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
