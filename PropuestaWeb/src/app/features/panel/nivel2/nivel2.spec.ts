import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nivel2 } from './nivel2.component';

describe('Nivel2', () => {
  let component: Nivel2;
  let fixture: ComponentFixture<Nivel2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nivel2],
    }).compileComponents();

    fixture = TestBed.createComponent(Nivel2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
