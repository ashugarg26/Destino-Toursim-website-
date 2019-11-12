import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PlacesComponent } from './places/places.component';
import { PackagesComponent } from './packages/packages.component';
import { ContactComponent } from './contact/contact.component';
import { HotelComponent } from './hotel/hotel.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetComponent } from './forget/forget.component';
import { HotelbookingComponent } from './hotelbooking/hotelbooking.component';
import { Hotel1Component } from './hotel1/hotel1.component';
import { Hotel2Component } from './hotel2/hotel2.component';
import { Hotel3Component } from './hotel3/hotel3.component';
import { Hotel4Component } from './hotel4/hotel4.component';
import { Hotel5Component } from './hotel5/hotel5.component';
import { Hotel6Component } from './hotel6/hotel6.component';
import { Hotel7Component } from './hotel7/hotel7.component';
import { Hotel8Component } from './hotel8/hotel8.component';
import { Hotel9Component } from './hotel9/hotel9.component';
import { PackagebookingComponent } from './packagebooking/packagebooking.component';
import { PaymentgatewayComponent } from './paymentgateway/paymentgateway.component';
import { ServiceComponent } from './service/service.component';
import { AdventureComponent } from './adventure/adventure.component';
import { HoteldetailsformComponent } from './hoteldetailsform/hoteldetailsform.component';
import { HotelimageformComponent } from './hotelimageform/hotelimageform.component';
import { ShimlaComponent } from './shimla/shimla.component';
import { PackagedetailsformComponent } from './packagedetailsform/packagedetailsform.component';
import { ManaliComponent } from './manali/manali.component';
import { BirComponent } from './bir/bir.component';
import { DalhousieComponent } from './dalhousie/dalhousie.component';
import { DharamshalaComponent } from './dharamshala/dharamshala.component';
import { KasolComponent } from './kasol/kasol.component';
import { KufriComponent } from './kufri/kufri.component';
import { KulluComponent } from './kullu/kullu.component';
import { MandiComponent } from './mandi/mandi.component';
import { CanActivateGuard } from './can-activate.guard';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  {path: '',component: HomeComponent},
  {path:'Home',component:HomeComponent},
  {path: 'About',component: AboutComponent},
  {path: 'Service',component: ServiceComponent},
  {path: 'Contact',component: ContactComponent},
  {path: 'Login',component: LoginComponent},
  {path: 'Signup',component: SignupComponent},
  {path: 'Forget',component: ForgetComponent},
  {path: 'Carousel',component: CarouselComponent},
  {path: 'Packages',component: PackagesComponent},
  {path: 'Places',component: PlacesComponent},
  {path: 'Bir',component: BirComponent},
  {path: 'Dalhousie',component: DalhousieComponent},
  {path: 'Dharamshala',component: DharamshalaComponent},
  {path: 'Kasol',component: KasolComponent},
  {path: 'Kufri',component: KufriComponent},
  {path: 'Kullu',component: KulluComponent},
  {path: 'Manali',component: ManaliComponent},
  {path: 'Mandi',component: MandiComponent},
  {path: 'Shimla',component: ShimlaComponent},
  {path: 'Hotel',component: HotelComponent},
  {path: 'H1',component: Hotel1Component},
  {path: 'H2',component: Hotel2Component},
  {path: 'H3',component: Hotel3Component},
  {path: 'H4',component: Hotel4Component},
  {path: 'H5',component: Hotel5Component},
  {path: 'H6',component: Hotel6Component},
  {path: 'H7',component: Hotel7Component},
  {path: 'H8',component: Hotel8Component},
  {path: 'H9',component: Hotel9Component},
  {path: 'HotelBooking',component: HotelbookingComponent,canActivate:[CanActivateGuard]},
  {path: 'PaymentGateway',component: PaymentgatewayComponent},
  {path: 'Adventure',component: AdventureComponent},
  {path: 'Hoteldetailsform',component: HoteldetailsformComponent},
  {path: 'Hotelimageform',component: HotelimageformComponent},
  {path: 'PackageBooking',component: PackagebookingComponent,canActivate:[CanActivateGuard]},
  {path: 'Packagedetailsform',component: PackagedetailsformComponent},
  {path: 'Admin', component: AdminComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
