import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { packagebooking } from '../Model/packagebooking';

@Component({
  selector: 'app-packagebooking',
  templateUrl: './packagebooking.component.html',
  styleUrls: ['./packagebooking.component.css']
})
export class PackagebookingComponent implements OnInit {

    value:any;
    pkg = new packagebooking();

  constructor(private active:ActivatedRoute, private router: Router) { }

  bookpackage(name)
  {
    const obj = JSON.stringify(this.pkg);
    this.router.navigate(['PaymentGateway'],{queryParams:{"value": name, "bookingdata": obj}});
  }

  ngOnInit() {
      this.pkg.category = 'Package';
      console.log(this.pkg.category);
    this.active.queryParamMap.subscribe((data)=>{
        this.value= data.get('value');
        console.log("Package Name is = ",this.value);
     });
      
  }

}
