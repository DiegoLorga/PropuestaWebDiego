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
      { path: '', redirectTo: 'nivel1', pathMatch: 'full' },
      
      { 
        path: 'nivel1', 
        loadComponent: () => import('./features/panel/nivel1/nivel1.component').then(m => m.Nivel1Component) 
      },
      { 
        path: 'nivel2', 
        loadComponent: () => import('./features/panel/nivel2/nivel2.component').then(m => m.Nivel2Component) 
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