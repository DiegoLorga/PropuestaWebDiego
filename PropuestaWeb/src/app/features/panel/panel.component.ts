import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {
  // Controla si el menú está anclado (abierto) por clic
  menuAbierto = false; 

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }
}