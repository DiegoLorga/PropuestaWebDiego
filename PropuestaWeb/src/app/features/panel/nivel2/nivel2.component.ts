import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nivel2',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './nivel2.component.html',
  styleUrl: './nivel2.component.css',
})
export class Nivel2Component {

  // Datos simulados para visualizar la tabla
  expedientes = [
    { folio: 'EXP-26-001', nombre: 'Juan Pérez López', rfc: 'PELJ801205ABC', nivel: 1, estado: 'Pendiente de Visita', deuda: 14500.50 },
    { folio: 'EXP-26-002', nombre: 'Comercializadora del Sur S.A.', rfc: 'CSU981002XYZ', nivel: 2, estado: 'Notificado', deuda: 89000.00 },
    { folio: 'EXP-26-003', nombre: 'María González Ruiz', rfc: 'GORM750418MNO', nivel: 3, estado: 'Bienes Señalados', deuda: 32400.00 },
    { folio: 'EXP-26-004', nombre: 'Constructora Beta', rfc: 'CBE050819DEF', nivel: 1, estado: 'Localizado', deuda: 125000.00 },
    { folio: 'EXP-26-005', nombre: 'Luis Hernández', rfc: 'HELL901122QWE', nivel: 4, estado: 'En Remate', deuda: 250000.00 }
  ];

}
