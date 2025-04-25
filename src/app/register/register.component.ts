import {Component, ElementRef, input, ViewChild} from '@angular/core';
import {NgForOf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {registerUser, saveUserData} from '../../firebase/firebaseAuthService';
import {Router, RouterLink} from '@angular/router';
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from '../../firebase/firebase_config';

@Component({
  selector: 'app-register',
  imports: [
    NgForOf,
    FormsModule,
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  countries: string[] = [
    'Albania', 'Andorra', 'Armenia', 'Austria', 'Azerbaijan',
    'Belarus', 'Belgium', 'Bosnia and Herzegovina', 'Bulgaria',
    'Croatia', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia',
    'Finland', 'France', 'Georgia', 'Germany', 'Greece', 'Hungary',
    'Iceland', 'Ireland', 'Italy', 'Kosovo', 'Latvia', 'Liechtenstein',
    'Lithuania', 'Luxembourg', 'Malta', 'Moldova', 'Monaco',
    'Montenegro', 'Netherlands', 'Norway', 'Poland', 'Portugal',
    'Romania', 'Russia', 'San Marino', 'Serbia', 'Slovakia',
    'Slovenia', 'Spain', 'Sweden', 'Switzerland', 'Turkey',
    'Ukraine', 'United Kingdom'
  ];
  name: string = '';
  email: string = '';
  number: string = '';
  birthday: string = '';
  selectedSex: string = '';
  country: string = '';
  password: string = '';

  constructor(private router: Router) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('Login Component');
      }
    });
  }


    async registerUserButton() {
      try {
        await registerUser(this.email, this.password);
        const uid = sessionStorage.getItem("userUid");

        if ( !uid) {
          throw new Error("UID not found in sessionStorage.");
        }

        const data = {
          UserEmail: this.email,
          UserPassword: this.password,
          birthday: this.birthday,
          selectedSex: this.selectedSex,
          country: this.country,
          nameSurname: this.name,
          sex: this.selectedSex
        };

        await saveUserData(uid, data);
        this.router.navigate(['/home']);
      } catch (error) {
        console.error("Registration error:", error);
      }
    }


}

