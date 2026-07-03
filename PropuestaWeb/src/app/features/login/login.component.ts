import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  loginForm: FormGroup = this.fb.group({
    usuario: ['', Validators.required],
    password: ['', Validators.required]
  });

  mostrarPassword = false;

  togglePassword() {
    this.mostrarPassword = !this.mostrarPassword;
  }

  ingresar() {
    if (this.loginForm.valid) {
      const { usuario } = this.loginForm.value;
      // Simulamos que si es admin entra, o si no, también (para la prueba)
      console.log('Iniciando sesión como:', usuario);
      this.router.navigate(['/panel/nivel1']);
    } else {
      // Marcamos los campos como tocados para mostrar errores de UI
      this.loginForm.markAllAsTouched();
    }
  }
}