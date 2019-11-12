import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../Services/data.service';


declare var Swiper: any;


@Component({
  selector: 'app-hotel1',
  templateUrl: './hotel1.component.html',
  styleUrls: ['./hotel1.component.css']
})
export class Hotel1Component implements OnInit {
  value;
  details ;
  index;
  v=[];

  constructor(private active: ActivatedRoute, private d: DataService, private router:Router) { }

  book(name)
  {
    if(localStorage.getItem('userdetails')!=null)
    {
        this.router.navigate(['HotelBooking'],{queryParams:{"value": name}});
    }
    else
    {
        // console.log("category", this.details.category);
        this.router.navigate(['Login']);
    }
  }

   ngAfterViewInit(){
    var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    },
  pagination: {
    el: '.swiper-pagination',
  },
  
});
   }
  ngOnInit() {
	  window.scrollTo(0,0);
    


this.active.queryParamMap.subscribe((data)=>{
  this.value= data.get('value');
  console.log("Hotel Name is = ",this.value);
    });

    this.d.getdetails(this.value).subscribe((data)=>{
      console.log("hotel Detalis"+data.Hotel_Name);
      this.details = data;
      console.log(data);
	  this.index = this.details.counter_id; 

	  for(let i=0; i<this.index; i++)
	{
		this.v[i] = i+1;
		console.log("hfgfdfdfdgdsrdf",this.v);
	}

	});
	
	
  }
}
