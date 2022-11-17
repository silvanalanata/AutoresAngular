import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcitasComponent } from './newcitas.component';

describe('NewcitasComponent', () => {
  let component: NewcitasComponent;
  let fixture: ComponentFixture<NewcitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewcitasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewcitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
