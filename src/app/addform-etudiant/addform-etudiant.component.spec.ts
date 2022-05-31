import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddformEtudiantComponent } from './addform-etudiant.component';

describe('AddformEtudiantComponent', () => {
  let component: AddformEtudiantComponent;
  let fixture: ComponentFixture<AddformEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddformEtudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddformEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
