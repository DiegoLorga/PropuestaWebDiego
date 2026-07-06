import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nivel3',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './nivel3.component.html',
  styleUrl: './nivel3.component.css',
})
export class Nivel3Component {
// Datos simulados de los agentes en campo
  notificadores = [
    { id: 1, nombre: 'Carlos Ramírez', zona: 'Zona Centro', carga: 12, maximo: 15 },
    { id: 2, nombre: 'Ana López', zona: 'Zona Norte', carga: 15, maximo: 15 },
    { id: 3, nombre: 'Miguel Torres', zona: 'Zona Sur', carga: 4, maximo: 15 }
  ];

  // Expedientes pendientes de asignar a un notificador
  pendientes = [
    { folio: 'EXP-26-010', contribuyente: 'Llantera El Camino', cp: '68000', zona: 'Centro', nivel: 1 },
    { folio: 'EXP-26-011', contribuyente: 'Ferretería Industrial', cp: '68050', zona: 'Norte', nivel: 2 },
    { folio: 'EXP-26-012', contribuyente: 'Abarrotes San Juan', cp: '68000', zona: 'Centro', nivel: 1 },
    { folio: 'EXP-26-013', contribuyente: 'Distribuidora XYZ', cp: '68120', zona: 'Sur', nivel: 3 },
    { folio: 'EXP-26-014', contribuyente: 'Hotel Las Palmas', cp: '68150', zona: 'Oriente', nivel: 1 }
  ];

  // Método para calcular el porcentaje de carga de un agente
  calcularCarga(carga: number, maximo: number): number {
    return (carga / maximo) * 100;
  }

}
