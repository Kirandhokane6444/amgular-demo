import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TravelComponent } from './travel/travel.component';
import { HotelComponent } from './hotel/hotel.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FlightComponent } from './flight/flight.component';
import { TrainComponent } from './train/train.component';
import { BusComponent } from './bus/bus.component';
import { FlightListComponent } from './flight-list/flight-list.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'travel',component:TravelComponent,
    children:[
      {path:'flight',component:FlightComponent},
      {path:'train',component:TrainComponent},
      {path:'bus',component:BusComponent}
    ]},
  {path:'hotel',component:HotelComponent},
  { path: 'flight-list/:sourceName/:destName', component:FlightListComponent },
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
