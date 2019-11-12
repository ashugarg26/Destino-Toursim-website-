import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  hotel;
  constructor(private d: DataService, private router: Router) { }

  details(name)
  {
    console.log(name);
    this.router.navigate(['H1'],{queryParams:{"value": name}});
    
  }

  ngOnInit() {
    window.scrollTo(0,0);
    this.d.gethotelname().subscribe((data)=>{
      console.log(data);
      this.hotel = data;
      });

  }

}
