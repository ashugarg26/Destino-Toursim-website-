import { Component, OnInit } from '@angular/core';
import { hotelbooking } from '../Model/hotelbooking';
import { DataService } from '../Services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hotelbooking',
  templateUrl: './hotelbooking.component.html',
  styleUrls: ['./hotelbooking.component.css']
})
export class HotelbookingComponent implements OnInit {

  details;
  value;

  book = new hotelbooking();
  constructor(private d: DataService, private router: Router, private active: ActivatedRoute) { }

  booking(name)
  {
    console.log(this.book);
    // this.d.getbooking(this.book).subscribe((data)=>{
    //     console.log(data);
    //   });
      const obj = JSON.stringify(this.book);

      this.router.navigate(['PaymentGateway'],{queryParams:{"value": name, "bookingdata": obj}});
  }

  ngOnInit() {

    this.book.category = 'Hotel';

    this.active.queryParamMap.subscribe((data)=>{
      this.value= data.get('value');
      console.log("Hotel Name is = ",this.value);
        });
    
        this.d.getdetails(this.value).subscribe((data)=>{
          console.log("hotel Detalis"+data.Hotel_Name);
          this.details = data;
        });
  }

}
