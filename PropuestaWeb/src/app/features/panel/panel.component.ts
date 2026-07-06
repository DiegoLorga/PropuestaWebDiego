import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {
  menuAbierto = false;
  breadcrumbActual = 'Nivel 1: Persuasivo'; // Valor por defecto

  private router = inject(Router);

  constructor() {
    // Escuchamos los cambios de ruta para actualizar el breadcrumb
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.actualizarBreadcrumb(event.urlAfterRedirects);
    });
  }

  // Función que asigna el nombre según la URL
  actualizarBreadcrumb(url: string) {
    if (url.includes('nivel1')) {
      this.breadcrumbActual = 'Nivel 1: Persuasivo';
    } else if (url.includes('nivel2')) {
      this.breadcrumbActual = 'Nivel 2: Requerimiento';
    } else if (url.includes('nivel3')) {
      this.breadcrumbActual = 'Nivel 3: Embargo';
    } else if (url.includes('nivel4')) {
      this.breadcrumbActual = 'Nivel 4: Remate';
    } else {
      this.breadcrumbActual = 'Inicio';
    }
  }

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }
}