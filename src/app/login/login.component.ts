import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { loginUser } from '../../firebase/firebaseAuthService';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/firebase_config';

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


  constructor(private router: Router) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('Login Component');
      }
    });
  }

  onLogin() {
    console.log('Login Component');
    loginUser(this.email, this.password)
      .then(() => {
        console.log('Login successful');
        this.router.navigate(['/home']);
      })
      .catch((err) => {
        console.error('Error al iniciar sesión:', err.message);
        alert('Usuario o contraseña incorrectos. Por favor, intenta de nuevo.');
      });
  }

}
