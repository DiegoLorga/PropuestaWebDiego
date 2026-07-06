import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialActualizacion } from './historial-actualizacion.component';

describe('HistorialActualizacion', () => {
  let component: HistorialActualizacion;
  let fixture: ComponentFixture<HistorialActualizacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistorialActualizacion],
    }).compileComponents();

    fixture = TestBed.createComponent(HistorialActualizacion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
