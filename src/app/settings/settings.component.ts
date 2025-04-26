import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {changeUserPassword, registerUser, saveUserData} from '../../firebase/firebaseAuthService';
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from '../../firebase/firebase_config';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  darkMode: boolean = false;
  notificationsEnabled: boolean = false;
  privacySetting: 'public' | 'private' = 'public';
  language: string = "";


  oldPassword: string = "";
  newPassword: string = "";
  confirmPassword: string = "";
  uid: string = "";

  constructor(private router: Router) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.uid = user.uid;
        console.log('Usuario autenticado:', this.uid);
      }
    });
  }

  async saveSettings() {
    if (!this.uid) {
      console.error("Usuario no autenticado");
      return;
    }

    const settingsData = {
      darkMode: this.darkMode,
      notificationsEnabled: this.notificationsEnabled,
      privacySetting: this.privacySetting,
      language: this.language
    };

    try {
      await saveUserData(this.uid, settingsData);
      console.log("Settings guardados exitosamente.");
    } catch (error) {
      console.error("Error al guardar settings:", error);
    }
  }

  async changeUserPassword() {
    if (this.newPassword !== this.confirmPassword) {
      alert('Las nuevas contraseñas no coinciden.');
      return;
    }

    try {
      await changeUserPassword(this.oldPassword, this.newPassword);
      alert('Contraseña cambiada exitosamente.');
      this.oldPassword = "";
      this.newPassword = "";
      this.confirmPassword = "";
    } catch (error: any) {
      alert('Error al cambiar la contraseña: ' + (error?.message || ''));
    }
  }


}
