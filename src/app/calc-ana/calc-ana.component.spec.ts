import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcAnaComponent } from './calc-ana.component';

describe('CalcAnaComponent', () => {
  let component: CalcAnaComponent;
  let fixture: ComponentFixture<CalcAnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcAnaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcAnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
