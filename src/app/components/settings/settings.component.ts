import {Component, OnInit} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import { changeUserPassword, saveUserData, getUserData } from '../../../firebase/firebaseAuthService';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../firebase/firebase_config';
import {NgClass, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  imports: [
    FormsModule,
    NgClass,
    RouterLink,
    NgIf
  ],
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit{
  darkMode = false;
  notificationsEnabled = false;
  privacySetting: 'public' | 'private' = 'public';
  language = '';
  uid = '';

  oldPassword = '';
  newPassword = '';
  confirmPassword = '';

  passwordMessage = '';
  passwordMessageType: 'success' | 'warning' | 'error' = 'success';

  ngOnInit(): void {
    onAuthStateChanged(auth, async user => {
      if (!user) return;
      this.uid = user.uid;

      const data = await getUserData(this.uid);
      if (data) {
        this.darkMode             = !!data.darkMode;
        this.notificationsEnabled = !!data.notificationsEnabled;
        this.privacySetting       = data.privacySetting || 'public';
        this.language             = data.language || '';
      }
    });
  }

  constructor() {
    onAuthStateChanged(auth, user => {
      if (user) this.uid = user.uid;
    });
  }

  async saveSettings(): Promise<void> {
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
      alert('Settings guardados exitosamente.');
    } catch {
      alert('Error al guardar settings.');
    }
  }

  async changeUserPassword(form: NgForm) {
    if (form.invalid) {
      this.setPasswordMessage('All fields are required', 'warning');
      return;
    }

    if (this.newPassword !== this.confirmPassword) {
      this.setPasswordMessage('The new passwords do not match', 'error');
      return;
    }

    if (this.newPassword.length < 8) {
      this.setPasswordMessage('The password must be at least 8 characters long', 'warning');
      return;
    }
    if (!/[A-Z]/.test(this.newPassword)) {
      this.setPasswordMessage('The password must contain at least one uppercase letter', 'warning');
      return;
    }
    if (!/[0-9]/.test(this.newPassword)) {
      this.setPasswordMessage('The password must contain at least one number', 'warning');
      return;
    }

    try {
      await changeUserPassword(this.oldPassword, this.newPassword);
      this.setPasswordMessage('Password changed successfully', 'success');
      form.resetForm();             // limpia los campos
    } catch (err: any) {
      this.setPasswordMessage('Error: ' + (err.message || err), 'error');
    }
  }

  private setPasswordMessage(msg: string, type: 'success'|'warning'|'error') {
    this.passwordMessage = msg;
    this.passwordMessageType = type;
  }
}
