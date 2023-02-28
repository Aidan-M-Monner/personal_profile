import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AureliosComponent } from './aurelios.component';

describe('AureliosComponent', () => {
  let component: AureliosComponent;
  let fixture: ComponentFixture<AureliosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AureliosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AureliosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
