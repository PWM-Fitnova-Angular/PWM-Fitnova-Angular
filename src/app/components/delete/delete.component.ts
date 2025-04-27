import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { auth } from '../../../firebase/firebase_config';
import { deleteUser, EmailAuthProvider, onAuthStateChanged, reauthenticateWithCredential, User } from "firebase/auth";
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  delete: string = "";
  password: string = "";
  user: User | null = null;

  constructor(private router: Router) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('Usuario autenticado:', user.uid);
        this.user = user;
      }
    });
  }

  async onDelete() {
    if (!this.user) {
      alert('No hay usuario autenticado.');
      return;
    }
    if (this.delete !== 'yes') {
      alert('Debes confirmar que deseas eliminar la cuenta.');
      return;
    }
    if (!this.password) {
      alert('Debes escribir tu contraseña para continuar.');
      return;
    }
    try {
      const credential = EmailAuthProvider.credential(this.user.email!, this.password);
      await reauthenticateWithCredential(this.user, credential);
      await deleteUser(this.user);
      alert('Cuenta eliminada exitosamente.');
      this.router.navigate(['/register']);
    } catch (error: any) {
      console.error('Error eliminando la cuenta:', error.message);
      alert('Error: ' + (error.message || 'No se pudo eliminar la cuenta.'));
    }
  }
}
