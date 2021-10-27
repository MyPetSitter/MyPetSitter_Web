import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteServicopetsitterComponent } from './delete-servicopetsitter.component';

describe('DeleteServicopetsitterComponent', () => {
  let component: DeleteServicopetsitterComponent;
  let fixture: ComponentFixture<DeleteServicopetsitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteServicopetsitterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteServicopetsitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
