import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tourism';
  isOne:boolean;

  constructor(private router:Router,private elementRef: ElementRef)
  {
    
  }
 





//   fun()
//   {
//     if(this.router.url === '/Login')
//     {
//         this.isOne=true;
//     }
//     else
//     {
//         this.isOne=false;
//     }
//   }
fun()
{
  if(this.router.url === '/Login')
  {
    //   native element represents the body tag.
    // owner document is having the url of login page.
    // this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = "url('../../assets/photos/cover_img.jpg')";
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.52),rgba(0,0,0,0.52)),url(../../assets/photos/cover_img.jpg)";
    // this.elementRef.nativeElement.ownerDocument.body.style.backgroundPosition = "center-center";
  }
  else
  {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = "";
  }
}



}
