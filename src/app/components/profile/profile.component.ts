import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {onAuthStateChanged, signOut} from 'firebase/auth';
import {auth} from '../../../firebase/firebase_config';

@Component({
  selector: 'app-profile',
  imports: [
    RouterLink
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  isLoggedIn = false;

  constructor(private router: Router) {}

  ngOnInit() {
    onAuthStateChanged(auth, user => {
      this.isLoggedIn = !!user;
    });
  }
  logout(): void {
    signOut(auth)
      .then(() => {
        console.log('Sesión cerrada');
        this.router.navigate(['/login']);
      })
      .catch(err => console.error('Error al cerrar sesión', err));
  }
}
