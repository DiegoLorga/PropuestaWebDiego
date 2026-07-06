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

  // VARIABLES CORRECTAS PARA EL MENÚ DE 4 NIVELES RAMIFICADO
  menuGestionAbierto = false;
  subseccion1Abierta = false;
  subseccion2Abierta = false;
  subseccion3Abierta = false;
  seccionContenedoraAbierta = false;
  fueAbiertoPorCarpeta = false;

  // Reemplazamos el string por un arreglo para manejar la profundidad
  migasDePan: { etiqueta: string, ruta: string }[] = [];

  private router = inject(Router);

  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.actualizarBreadcrumb(event.urlAfterRedirects);
    });
  }

  // Función adaptada a tus rutas exactas
  actualizarBreadcrumb(url: string) {
    this.migasDePan = []; // Limpiamos el arreglo en cada cambio

    // Nivel base
    this.migasDePan.push({ etiqueta: 'Panel', ruta: '/panel' });

    const segmentos = url.split('/').filter(segmento => segmento !== '');

    // Evaluamos tus rutas definidas
    if (segmentos.includes('nivel1')) {
      this.migasDePan.push({ etiqueta: 'Registro', ruta: '/panel/nivel1' });
    }
    // CAMBIO 1: Buscamos si la URL tiene 'nivel2' O 'expedientes'
    else if (segmentos.includes('nivel2') || segmentos.includes('expedientes')) {

      // Siempre ponemos el padre primero
      this.migasDePan.push({ etiqueta: 'Gestión de Expediente', ruta: '/panel/nivel2' });

      // CAMBIO 2: Buscamos 'detalle' en lugar de 'detalle-expediente'
      if (segmentos.includes('detalle')) {
        const indexDetalle = segmentos.indexOf('detalle');
        const folio = segmentos[indexDetalle + 1];

        if (folio) {
          this.migasDePan.push({
            etiqueta: folio,
            // Usamos la ruta exacta que pusiste en app.routes.ts
            ruta: `/panel/expedientes/detalle/${folio}`
          });
        }

        // Nivel más profundo: Historial
        if (segmentos.includes('historial')) {
          this.migasDePan.push({
            etiqueta: 'Historial de Actuaciones',
            // Usamos la ruta exacta de app.routes.ts
            ruta: `/panel/expedientes/detalle/${folio}/historial`
          });
        }
      }
    }
    else if (segmentos.includes('nivel3')) {
      this.migasDePan.push({ etiqueta: 'Asignación y Rutas', ruta: '/panel/nivel3' });
    }
    else if (segmentos.includes('nivel4')) {
      this.migasDePan.push({ etiqueta: 'Reportes', ruta: '/panel/nivel4' });
    }
    else {
      this.migasDePan.push({ etiqueta: 'Inicio', ruta: '/panel/dashboard' });
    }
  }

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
    // Si menuAbierto es falso (la sidebar se hizo chiquita), cerramos todos los acordeones
    if (!this.menuAbierto) {
      this.menuGestionAbierto = false;
      this.subseccion1Abierta = false;
      this.subseccion2Abierta = false;
      this.subseccion3Abierta = false;
      this.seccionContenedoraAbierta = false;
    }
    if (this.menuGestionAbierto) {
      this.menuAbierto = true;
    }
  }

  toggleCarpetaGestion() {
    this.menuGestionAbierto = !this.menuGestionAbierto;

    if (this.menuGestionAbierto) {
      // Si la abrimos y la sidebar estaba chiquita, anotamos que la carpeta la forzó a abrirse
      if (!this.menuAbierto) {
        this.fueAbiertoPorCarpeta = true;
        this.menuAbierto = true;
      }
    } else {
      // Si cerramos la carpeta y recordamos que ella fue la que abrió la sidebar... ¡La volvemos a encoger!
      if (this.fueAbiertoPorCarpeta) {
        this.menuAbierto = false;
        this.fueAbiertoPorCarpeta = false; // Reseteamos la memoria
      }
    }
  }
  estaEnRutaGestion(): boolean {
    return this.router.url.includes('/nivel2');
  }
}