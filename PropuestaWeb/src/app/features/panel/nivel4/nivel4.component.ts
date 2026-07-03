import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nivel4',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './nivel4.component.html'
})
export class Nivel4Component {
  private fb = inject(FormBuilder);

  // Variable para controlar la alerta visual
  mostrarExito = false;

  ingresoForm: FormGroup = this.fb.group({
    monto: ['', [Validators.required, Validators.min(1)]],
    concepto: ['', [Validators.required, Validators.minLength(5)]]
  });

  guardar() {
    if (this.ingresoForm.valid) {
      console.log('Guardado exitosamente:', this.ingresoForm.value);
      
      // 1. Mostramos el mensaje de éxito
      this.mostrarExito = true;
      
      // 2. Limpiamos el formulario para prevenir registros duplicados por error
      this.ingresoForm.reset();

      // 3. Ocultamos el mensaje automáticamente después de 3 segundos
      setTimeout(() => {
        this.mostrarExito = false;
      }, 3000);
    }
  }
}