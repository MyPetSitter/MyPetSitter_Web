import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosReadAllComponent } from './usuarios-read-all.component';

describe('UsuariosReadAllComponent', () => {
  let component: UsuariosReadAllComponent;
  let fixture: ComponentFixture<UsuariosReadAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariosReadAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosReadAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
