import {Component, ElementRef, input, ViewChild} from '@angular/core';
import {NgForOf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {registerUser} from '../../firebase/firebaseAuthService';
import {RouterLink} from '@angular/router';

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

  registerUserButton() {

      registerUser(this.email, this.password).then();


  }

}

