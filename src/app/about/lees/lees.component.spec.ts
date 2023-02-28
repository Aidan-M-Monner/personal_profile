import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeesComponent } from './lees.component';

describe('LeesComponent', () => {
  let component: LeesComponent;
  let fixture: ComponentFixture<LeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
