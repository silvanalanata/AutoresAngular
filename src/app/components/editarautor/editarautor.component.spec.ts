import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarautorComponent } from './editarautor.component';

describe('EditarautorComponent', () => {
  let component: EditarautorComponent;
  let fixture: ComponentFixture<EditarautorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarautorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarautorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
