import { Component, OnInit } from '@angular/core';
import { signup } from '../Model/signup';
import { DataService } from '../Services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = new signup();
  obj: any;
  confirm: any;
  
  constructor(private d:DataService, private router: Router) { }

  Submit(form)
  {
    if(this.user.username == null)
        alert("Username is required");
    else if(this.user.email == null)
        alert("Email is required");
    else if(this.user.contact== null)
        alert("Contact is required");
    else if(this.user.password == null)
        alert("Password is required");
    else if(this.user.password != this.confirm)
        alert("Password is incorrect");
    else
    {
        this.d.getsignup(this.user).subscribe((data)=>{
        alert("Signup Successfull");
        if(data.status == "OK")
            {
                this.obj = JSON.stringify(this.user);
                localStorage.setItem('userdetails', this.obj);
                console.log("data"+ this.obj);
            }
        //   this.router.navigate(['Home']);
        });
    }
  }

  ngOnInit() {

  }

}
