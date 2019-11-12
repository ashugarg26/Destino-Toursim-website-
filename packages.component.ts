import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {


    value: any;
  constructor(private d: DataService, private router: Router) { }

    book(name)
    {
        if(localStorage.getItem('userdetails')!=null)
        {
            this.router.navigate(['PackageBooking'],{queryParams:{"value": name}});
        }
        else
        {
            this.router.navigate(['Login']);
        }
    }

  ngOnInit() {
    window.scrollTo(0,0);
    this.d.getpackagename().subscribe((data)=>{
      console.log(data);
      this.value = data;
    });
  }
}
