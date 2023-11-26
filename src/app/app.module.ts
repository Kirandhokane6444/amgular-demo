import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TravelComponent } from './travel/travel.component';
import { HotelComponent } from './hotel/hotel.component';
import { BusComponent } from './bus/bus.component';
import { TrainComponent } from './train/train.component';
import { FlightComponent } from './flight/flight.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TravelComponent,
    HotelComponent,
    BusComponent,
    TrainComponent,
    FlightComponent,
    PagenotfoundComponent,
    FlightListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
