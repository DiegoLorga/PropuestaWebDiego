import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-detalle-expediente',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detalle-expediente.component.html',
  styleUrls: ['./detalle-expediente.component.css']
})
export class DetalleExpedienteComponent {
  // Simulamos los datos que vendrían de tu base de datos al consultar el folio
  expediente = {
    folio: 'EXP-26-001',
    nombre: 'Juan Pérez López',
    rfc: 'PELJ801205ABC',
    nivelActual: 1,
    estatus: 'Pendiente de Visita',
    fechaAsignacion: '02/07/2026',
    asignadoA: 'Carlos Ramírez',
    contacto: {
      telefono: '951 123 4567',
      correo: 'juan.perez@ejemplo.com',
      domicilio: 'Calle Benito Juárez #123, Col. Centro, C.P. 68000'
    },
    deuda: {
      principal: 10000.00,
      recargos: 1500.50,
      multas: 3000.00,
      total: 14500.50
    }
  };
}