import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { changeUserPassword, saveUserData, getUserData } from '../../../firebase/firebaseAuthService';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../firebase/firebase_config';
import { NgClass, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  imports: [
    ReactiveFormsModule,
    NgClass,
    RouterLink,
    NgIf
  ],
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  settingsForm!: FormGroup;
  passwordForm!: FormGroup;

  uid = '';
  passwordMessage = '';
  passwordMessageType: 'success' | 'warning' | 'error' = 'success';

  constructor(private fb: FormBuilder) {
    onAuthStateChanged(auth, user => {
      if (user) this.uid = user.uid;
    });
  }

  ngOnInit(): void {
    this.initSettingsForm();
    this.initPasswordForm();

    onAuthStateChanged(auth, async user => {
      if (!user) return;
      this.uid = user.uid;

      const data = await getUserData(this.uid);
      if (data) {
        this.settingsForm.patchValue({
          darkMode: !!data.darkMode,
          notificationsEnabled: !!data.notificationsEnabled,
          privacySetting: data.privacySetting || 'public',
          language: data.language || ''
        });
      }
    });
  }

  private initSettingsForm(): void {
    this.settingsForm = this.fb.group({
      darkMode: [false],
      notificationsEnabled: [false],
      privacySetting: ['public'],
      language: ['']
    });
  }

  private initPasswordForm(): void {
    this.passwordForm = this.fb.group({
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/.*[A-Z].*/),
        Validators.pattern(/.*[0-9].*/)
      ]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: this.passwordMatchValidator });
  }

  private passwordMatchValidator(form: FormGroup): { [key: string]: boolean } | null {
    const newPassword = form.get('newPassword')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;

    if (newPassword !== confirmPassword) {
      form.get('confirmPassword')?.setErrors({ mismatch: true });
      return { 'mismatch': true };
    }

    return null;
  }

  async saveSettings(): Promise<void> {
    if (!this.uid) {
      console.error("User not authenticated");
      return;
    }

    if (this.settingsForm.invalid) {
      return;
    }

    const settingsData = this.settingsForm.value;

    try {
      await saveUserData(this.uid, settingsData);
      alert('Settings saved successfully.');
    } catch {
      alert('Error saving settings.');
    }
  }

  async changeUserPassword() {
    if (this.passwordForm.invalid) {
      if (this.passwordForm.errors?.['mismatch']) {
        this.setPasswordMessage('Passwords do not match', 'error');
      } else if (this.passwordForm.get('newPassword')?.hasError('minlength')) {
        this.setPasswordMessage('Password must be at least 8 characters long', 'warning');
      } else if (this.passwordForm.get('newPassword')?.hasError('pattern')) {
        this.setPasswordMessage('Password must contain at least one uppercase letter and one number', 'warning');
      } else {
        this.setPasswordMessage('All fields are required', 'warning');
      }
      return;
    }

    const { oldPassword, newPassword } = this.passwordForm.value;

    try {
      await changeUserPassword(oldPassword, newPassword);
      this.setPasswordMessage('Password changed successfully', 'success');
      this.passwordForm.reset();
    } catch (err: any) {
      this.setPasswordMessage('Error: ' + (err.message || err), 'error');
    }
  }

  private setPasswordMessage(msg: string, type: 'success' | 'warning' | 'error') {
    this.passwordMessage = msg;
    this.passwordMessageType = type;
  }
}
