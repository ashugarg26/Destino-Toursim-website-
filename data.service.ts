import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { signupResponse, signup } from '../Model/signup';
import { hoteldetailsform } from '../Model/hoteldata';
import { packagedata } from '../Model/packagedata';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  
    url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getsignup(user):Observable<signupResponse>
  {
    return this.http.post<signupResponse>(this.url + '/signup', user);
  }

  getlogin(user):Observable<signup>
  {
    return this.http.post<signup>(this.url + '/login', user);
  }

  getforget(user):Observable<signupResponse>
  {
    return this.http.post<signupResponse>(this.url + '/login/forget', user);
  }

  forget(user):Observable<signupResponse>
  {
    return this.http.post<signupResponse>(this.url + '/login/forget/email', user);
  }

  verify_code(user, email):Observable<signupResponse>
  {
    return this.http.post<signupResponse>(this.url + '/login/verification', {code: user,verify_email: email});
  }

  getbooking(book):Observable<signupResponse>
  {
    return this.http.post<signupResponse>(this.url + '/hotel/booking', book);
  }

  gethoteldetails(hoteldata):Observable<signupResponse>
  {
    return this.http.post<signupResponse>(this.url + '/hotel/form_details', hoteldata);
  }

  gethotelimage(formdata: FormData):Observable<signupResponse>
  {
    return this.http.post<signupResponse>(this.url + '/hotel/form_image', formdata);
  }

  gethotelname():Observable<hoteldetailsform[]>
  {
    return this.http.get<hoteldetailsform[]>(this.url + '/hotel/form_image');
  }

  // Hotel details are showing at slider component
  getdetails(hoteldata):Observable<hoteldetailsform>
  {
    return this.http.post<hoteldetailsform>(this.url + '/hotel/details', {title: hoteldata});
  }
  packagedata(formdata: FormData):Observable<signupResponse>
  {
    alert("submit");
      return this.http.post<signupResponse>(this.url + '/package/form_details', formdata);
  }
  getpackagename(): Observable<packagedata[]>
  {
      return this.http.get<packagedata[]>(this.url + '/package/details');
  }

  getpackdetails(packname): Observable<packagedata>
  {
      return this.http.post<packagedata>(this.url + '/package/details',{title: packname});
  }

  getcontact(contact):Observable<signupResponse>
  {
      return this.http.post<signupResponse>(this.url + '/contact-us', contact);
  }


}