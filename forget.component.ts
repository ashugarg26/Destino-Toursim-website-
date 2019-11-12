import { Component, OnInit } from '@angular/core';
import { signup } from '../Model/signup';
import { DataService } from '../Services/data.service';
import { stringify } from '@angular/compiler/src/util';


@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {

  user = new signup();
  i;j;k: any;
  str: string = "";
  n = 0;
  Verify: any;
  confirm: any;

  constructor(private d: DataService) { }

  forget_email(form)
  {
    if(this.user.email == null)
    {
        alert("Email is required");
    }
    else
    {
        this.d.forget(this.user).subscribe((data)=>{
        alert("Msg: " +data.msg + " Status: " +data.status);
        console.log(data);

            if(data.status == "OK")
            {
                this.i = 1;
                this.is_verify();
                this.random();
            }
        });

    }
  }


Verify_code()
{
    console.log("verify",this.Verify);
    if(this.Verify == this.str)
    {
        this.j = 1;
        this.is_update();
    }
}

update_password()
{
    if(this.user.password == null)
        alert("Password is required");
    else if(this.user.password == this.confirm)
        {
            this.d.getforget(this.user).subscribe((data)=>{           
            console.log(data);
            });
        }
        else
         alert("Password is incorrect");
}



isforget(): boolean
{
    if(this.i == 1)
    {
        return  false;
    }
    else
    {
        return true;
    }
}
  
is_verify(): Boolean
{
    if(this.j == 1)
    {
        return  false;
    }
    else
    {
        return true;
    }
}

is_update(): Boolean
{
    if(this.j==1)
    return true;
}

random()
{  
    this.str="";
    this.n=0;
    while(this.n < 6)
    {
        this.str = this.str + stringify(Math.floor(Math.random() * 10));        
        this.n++;
    }
    console.log("str", this.str);
    this.d.verify_code(this.str, this.user.email).subscribe((data)=>{
        console.log(data);
    });
}



  ngOnInit() {
  }

}
