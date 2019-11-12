import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';
import { hoteldetailsform } from '../Model/hoteldata';

declare var $scope: any;

@Component({
  selector: 'app-hoteldetailsform',
  templateUrl: './hoteldetailsform.component.html',
  styleUrls: ['./hoteldetailsform.component.css']
})
export class HoteldetailsformComponent implements OnInit {

  hoteldata = new hoteldetailsform();
  constructor(private d: DataService) { }

  submit()
  {
    alert("Form Submitted");
    this.hoteldata.counter_id = 0;
    this.d.gethoteldetails(this.hoteldata).subscribe((data)=>{
      console.log(data);
    });
    // $scope.myForm.$setPristine();
    // $scope.currentRecord={};
    // $scope.myForm.$setUntouched();
    // this.hoteldata.reset();
  }

  ngOnInit() {
  }

}
