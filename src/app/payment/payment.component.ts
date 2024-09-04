import { Component, OnInit } from '@angular/core';
import { paymentTypes } from '../enum/paymentType.enum';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor() { }
  selectedPaymentType: any = '';
  PaymentTypes: any = paymentTypes;

  selectedMethod(data:any)
  {
    if(data == this.PaymentTypes.VISA)
    {
      this.selectedPaymentType = this.PaymentTypes.VISA 
    }
    else if( data == this.PaymentTypes.CREDIT_CARD)
    {
      this.selectedPaymentType = this.PaymentTypes.CREDIT_CARD
    }
    else
    {
      this.selectedPaymentType = this.PaymentTypes.CRYPTO_CURRENCY
    }
  }
  ngOnInit(): void {
  }

}
