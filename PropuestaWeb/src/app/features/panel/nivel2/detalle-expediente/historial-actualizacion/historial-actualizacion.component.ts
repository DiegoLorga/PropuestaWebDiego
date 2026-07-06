import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './historial-actualizacion.component.html',
  styleUrls: ['./historial-actualizacion.component.css']
})
export class HistorialComponent {
  
  folioActual = 'EXP-26-001';

  // Datos simulados del historial de visitas/actuaciones
  actuaciones = [
    { 
      fecha: '05 de Julio, 2026', 
      hora: '10:30 AM', 
      nivel: 2, 
      titulo: 'Requerimiento de Pago Notificado', 
      agente: 'Carlos Ramírez', 
      estatus: 'Completado', 
      notas: 'Se dejó citatorio con familiar (esposa). Se firmó de recibido y se anexaron fotos de la fachada.', 
      icono: 'bi-file-earmark-text-fill', 
      colorHex: '#285C4D', // Verde Oscuro
      tieneEvidencia: true
    },
    { 
      fecha: '20 de Junio, 2026', 
      hora: '12:15 PM', 
      nivel: 1, 
      titulo: 'Visita Persuasiva Fallida', 
      agente: 'Ana López', 
      estatus: 'No Localizado', 
      notas: 'Domicilio cerrado. Vecinos confirman que el contribuyente vive ahí pero trabaja todo el día. Se dejó notificación bajo la puerta.', 
      icono: 'bi-house-x-fill', 
      colorHex: '#B38E5D', // Dorado
      tieneEvidencia: true
    },
    { 
      fecha: '10 de Junio, 2026', 
      hora: '09:00 AM', 
      nivel: 0, 
      titulo: 'Apertura de Expediente', 
      agente: 'Sistema Central', 
      estatus: 'Generado', 
      notas: 'Asignación de adeudo inicial por falta de pago de obligaciones fiscales correspondientes al ejercicio 2025.', 
      icono: 'bi-folder-plus', 
      colorHex: '#6c757d', // Gris
      tieneEvidencia: false
    }
  ];
}