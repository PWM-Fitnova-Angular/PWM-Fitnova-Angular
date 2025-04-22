import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { loginUser } from '../../firebase/firebaseAuthService';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/firebase_config'; // tu config original

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: any;

  constructor(private router: Router) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.router.navigate(['/home']);
      }
    });
  }

  onLogin() {
    loginUser(this.email, this.password)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch((err) => {
        console.error('Error al iniciar sesión:', err.message);
        alert('Usuario o contraseña incorrectos. Por favor, intenta de nuevo.');
      });
  }

}
