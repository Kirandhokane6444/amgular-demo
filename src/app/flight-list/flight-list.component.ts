import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent {
  from:string | null=null;
  to:string| null = null;
  constructor(private activateRoute:ActivatedRoute){


  this.from = this.activateRoute.snapshot.paramMap.get('source');
  this.to = this.activateRoute.snapshot.paramMap.get('destination');  
}
}
