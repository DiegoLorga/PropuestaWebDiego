import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nivel4 } from './nivel4.component';

describe('Nivel4', () => {
  let component: Nivel4;
  let fixture: ComponentFixture<Nivel4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nivel4],
    }).compileComponents();

    fixture = TestBed.createComponent(Nivel4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
