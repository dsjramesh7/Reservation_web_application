import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import {AboutUsComponent} from './components/about-us/about-us.component';
import {ContactUsComponent} from './components/contact-us/contact-us.component';
import {ExtraComponent} from './components/extra/extra.component';
import {HomeComponent} from './components/home/home.component';
import {LocationComponent} from './components/location/location.component';
import {MenuComponent} from './components/menu/menu.component';
import {ReservationComponent} from './components/reservation/reservation.component';
import { ResultComponent } from './components/result/result.component';



const routes: Routes = [

  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },

  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'aboutUs',
    component:AboutUsComponent
  },
  {
    path:'menu',
    component:MenuComponent
  },
  {
    path:'reservation',
    component:ReservationComponent
  },
  {
    path:'contactUs',
    component:ContactUsComponent
  },
  {
    path:'location',
    component:LocationComponent
  },
  {
    path:'extra',
    component:ExtraComponent
  },
  {
    path:'result',
    component:ResultComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes),ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
