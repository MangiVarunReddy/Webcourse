import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/shared/restaurant.service';
import { TopComponent } from '../top/top.component';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  constructor( private restaurantService:RestaurantService) { }

  ngOnInit(): void {
    // this.getNearByPlaces();
  }

 places:any=[];
  query:any;
  show:boolean=false;

  getNearByPlaces(){
    this.restaurantService.getRestaurant(this.query).subscribe( (data:any) => {
      this.places=data.results;
      this.show=true;
      console.log("response is ",data.results);

    });

  }

}
