import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddformPersonnelComponent } from './addform-personnel.component';

describe('AddformPersonnelComponent', () => {
  let component: AddformPersonnelComponent;
  let fixture: ComponentFixture<AddformPersonnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddformPersonnelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddformPersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
