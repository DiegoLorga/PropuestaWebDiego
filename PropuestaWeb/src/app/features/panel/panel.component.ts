import { Component } from '@angular/core';
import { MenuItem } from '../../models/menu.interface';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css',
})
export class PanelComponent {
  // 1. Control del menú en pantallas de celular
  menuMovilAbierto = false;

  // 2. Estructura completa y robusta del menú
  menu: MenuItem[] = [
    {
      nombre: 'Dashboard Principal',
      ruta: '/panel/nivel1' 
    },
    {
      nombre: 'Módulo Financiero',
      expandido: true, // Abierto por defecto
      submenus: [
        {
          nombre: 'Operaciones',
          expandido: true,
          submenus: [
            {
              nombre: 'Gestión de Capital',
              expandido: true,
              submenus: [
                {
                  nombre: 'Nuevo Ingreso',
                  ruta: '/panel/formulario'
                },
                {
                  nombre: 'Historial de Egresos',
                  ruta: '#' 
                }
              ]
            },
            {
              nombre: 'Conciliación Bancaria',
              ruta: '#'
            }
          ]
        }
      ]
    },
    {
      nombre: 'Reportes y Analítica',
      submenus: [
        { nombre: 'Balance General', ruta: '#' },
        { nombre: 'Estado de Resultados', ruta: '#' },
        { nombre: 'Auditorías', ruta: '#' }
      ]
    },
    {
      nombre: 'Recursos Humanos',
      submenus: [
        { nombre: 'Nómina', ruta: '#' },
        { nombre: 'Expedientes', ruta: '#' }
      ]
    },
    {
      nombre: 'Configuración',
      submenus: [
        { nombre: 'Usuarios y Roles', ruta: '#' },
        { nombre: 'Preferencias', ruta: '#' },
        { nombre: 'Seguridad', ruta: '#' }
      ]
    }
  ];

  // 3. Función para expandir/colapsar los niveles del menú
  toggleMenu(item: MenuItem) {
    item.expandido = !item.expandido;
  }

  // 4. Función para abrir/cerrar el menú en celular
  toggleMenuMovil() {
    this.menuMovilAbierto = !this.menuMovilAbierto;
  }
}