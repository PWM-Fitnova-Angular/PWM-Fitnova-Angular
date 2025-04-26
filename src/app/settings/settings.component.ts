import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {registerUser, saveUserData} from '../../firebase/firebaseAuthService';
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from '../../firebase/firebase_config';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-settings',
  imports: [
    RouterLink,
    CommonModule,
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

      const settingsData = {
      darkMode: this.darkMode,
      notificationsEnabled: this.notificationsEnabled,
      privacySetting: this.privacySetting,
      language: this.language
    };

    try {
      await saveUserData(this.uid, settingsData);
      this.router.navigate(['/home']);
      console.log("Settings guardados exitosamente.");
    } catch (error) {
      console.error("Error al guardar settings:", error);
    }
  }
}
