import {Component, ElementRef, input, ViewChild} from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [
    NgForOf
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


  registerUser() {


  }
  @ViewChild('name_login') input!: ElementRef;
}

