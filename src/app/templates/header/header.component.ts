import {RouterLink} from "@angular/router";
import { Component, OnInit } from '@angular/core';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../../firebase/firebase_config';
import {NgIf} from '@angular/common';


@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isLoggedIn = false;

  ngOnInit() {
    onAuthStateChanged(auth, user => {
      this.isLoggedIn = !!user;
    });
  }
  logout() {
    signOut(auth)
      .then(() => console.log('Sesión cerrada'))
      .catch(err => console.error('Error al cerrar sesión', err));
  }

}
