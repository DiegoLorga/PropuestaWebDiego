import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nivel4',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './nivel4.component.html'
})
export class Nivel4Component {
  // Datos simulados para la vista previa del reporte
  datosVistaPrevia = [
    { fecha: '01/07/2026', folio: 'EXP-26-001', nivel: 1, accion: 'Visita Persuasiva', responsable: 'Carlos Ramírez', monto: 14500.50, estatus: 'Completada' },
    { fecha: '02/07/2026', folio: 'EXP-26-045', nivel: 2, accion: 'Requerimiento de Pago', responsable: 'Ana López', monto: 89000.00, estatus: 'Notificado' },
    { fecha: '03/07/2026', folio: 'EXP-26-088', nivel: 3, accion: 'Señalización de Bienes', responsable: 'Miguel Torres', monto: 32400.00, estatus: 'Acta Levantada' },
    { fecha: '05/07/2026', folio: 'EXP-26-102', nivel: 1, accion: 'Visita Persuasiva', responsable: 'Carlos Ramírez', monto: 5500.00, estatus: 'No Localizado' }
  ];

  // Variables para la simulación de totales
  totalMonto = 141400.50;
  totalExpedientes = 4; 
}