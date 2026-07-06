  import { Routes } from '@angular/router';


  export const routes: Routes = [
    // 1. Redirección inicial
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    
    // 2. Login
    { 
      path: 'login', 
      loadComponent: () => import('./features/login/login.component').then(m => m.LoginComponent) 
    },
    
    // 3. Panel y sus niveles
    { 
      path: 'panel', 
      loadComponent: () => import('./features/panel/panel.component').then(m => m.PanelComponent),
      children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

        { 
          path: 'dashboard', 
          loadComponent: () => import('./features/panel/dashboard/dashboard.component').then(m => m.DashboardComponent) 
        },
        {
          path: 'nivel1', 
          loadComponent: () => import('./features/panel/nivel1/nivel1.component').then(m => m.Nivel1Component) 
        },
        { 
          path: 'nivel2', 
          loadComponent: () => import('./features/panel/nivel2/nivel2.component').then(m => m.Nivel2Component) 
        },
        {
          path: 'expedientes/detalle/:folio',
          loadComponent: () => import('./features/panel/nivel2/detalle-expediente/detalle-expediente.component').then(m => m.DetalleExpedienteComponent)
        },
        // C) Historial de Actuaciones (Nivel 4 de profundidad visual)
        {
          path: 'expedientes/detalle/:folio/historial',
          loadComponent: () => import('./features/panel/nivel2/detalle-expediente/historial-actualizacion/historial-actualizacion.component').then(m => m.HistorialComponent)
        },
        { 
          path: 'nivel3', 
          loadComponent: () => import('./features/panel/nivel3/nivel3.component').then(m => m.Nivel3Component) 
        },
        { 
          path: 'nivel4', 
          loadComponent: () => import('./features/panel/nivel4/nivel4.component').then(m => m.Nivel4Component) 
        }
      ]
    },
    
    // Ruta 404 de seguridad
    { path: '**', redirectTo: 'login' }
  ];