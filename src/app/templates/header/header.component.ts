import { RouterLink, Router, NavigationEnd } from "@angular/router";
import { Component, OnInit } from '@angular/core';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../../firebase/firebase_config';
import { NgIf } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  isAuthPage = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // Verificar autenticación con Firebase
    onAuthStateChanged(auth, user => {
      this.isLoggedIn = !!user;
    });

    // Verificar la ruta actual al iniciar
    this.checkIfAuthPage(this.router.url);

    // Suscribirse a cambios de ruta
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.checkIfAuthPage(event.url);
    });
  }

  private checkIfAuthPage(url: string): void {
    this.isAuthPage = url === '/register' || url === '/' || url === '/login';
  }

  logout() {
    signOut(auth)
      .then(() => {
        console.log('Sesión cerrada');
        this.router.navigate(['/login']);
      })
      .catch(err => console.error('Error al cerrar sesión', err));
  }
}
