import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-payment',
  imports: [
    FormsModule
  ],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  fullname: string = "";
  creditCard: string = "";
  Month: string = "";
  year: string = "";


  onSubmit() {
    const paymentData = {
      name : this.fullname,
      creditCard : this.creditCard,
      Month : this.Month,
      year : this.year,
    };
    console.log('Datos guardados (sin CVV):', paymentData);
    alert('Pago procesado correctamente. Gracias por su compra');
  }
}
