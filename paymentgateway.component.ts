import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../Services/data.service';
import { hotelbooking } from '../Model/hotelbooking';
import { NgModel } from '@angular/forms';
import { bloomHasToken } from '@angular/core/src/render3/di';

@Component({
  selector: 'app-paymentgateway',
  templateUrl: './paymentgateway.component.html',
  styleUrls: ['./paymentgateway.component.css']
})
export class PaymentgatewayComponent implements OnInit {


  details;
  value;
  booking;
//   book = new hotelbooking();
  book;
  data;
  payment_mode: any;
  selected_radio: any;
  pay_amount: any;
  price_num;
  guest_num;
  total_amount;
  check;
  blank: " ";

  constructor(private active: ActivatedRoute, private d: DataService, private router: Router) { }

  paynow()
  {
    console.log(this.book);
    this.d.getbooking(this.book).subscribe((data)=>{
      alert(data.msg);
      this.router.navigate(['Home']);
    });
   
  }

  setradio(mode)
    {
		// alert("dj"+mode);
		  this.selected_radio = mode;
    }

	isSelected(payment_mode): boolean {
		if(this.selected_radio == payment_mode)
			{
				return true;
			}
		else
			{
				return false;
			}
	}


  ngOnInit() {

    this.active.queryParamMap.subscribe((data)=>{
      this.value= data.get('value');
      this.booking= data.get('bookingdata');
      console.log("Hotel Name is = ",this.value);
      // console.log(JSON.parse(this.booking));
       this.book  = JSON.parse(this.booking);
       this.check  = JSON.parse(this.booking);
       console.log(this.book);
        });

        if( this.check.category == "Hotel")
        {
            this.guest_num = parseInt(this.book.guest);
            this.d.getdetails(this.value).subscribe((data)=>{
            console.log("hotel Detalis"+data.Hotel_Name);
            this.details = data;
            this.price_num = data.Price;
            this.pay_amount = ((this.guest_num) * (this.price_num));
            this.total_amount = JSON.parse(this.pay_amount);
            });
        }
        
        if(this.check.category ==  "Package")
        {
            this.guest_num = parseInt(this.book.Number_of_ppl);
           this.d.getpackdetails(this.value).subscribe((data)=>{
               console.log("Package"+data.Name);
               this.details = data;
               this.price_num = data.Price;
                this.pay_amount = ((this.guest_num) * (this.price_num));
                this.total_amount = JSON.parse(this.pay_amount);
           });
        }
    
		
  }

}
