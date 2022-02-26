import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  
  configUrl="https://api.foursquare.com/v3/places/search?client_id=1M3QBJOFDJK3OGGVNH20FTZKZQROT5MPTOTBVSAPEFGYDRLP&client_secret=XAHGZBSIN30YYIJCZ1VVLFLUU2NALVV2OTQUJSH00Y0Y2PPH&query=pizza&v=20220221&near=";
  
  
  getRestaurant(near:any){
    let headers= new HttpHeaders().set('Authorization', 'fsq3Ejh3P6V8A0qacog6Y//AztuqABFL3hAZzTesbnkVcR4=');
    const httpOptions={
      headers:headers
    }
    return this.http.get(this.configUrl+near,httpOptions);
  }

}
