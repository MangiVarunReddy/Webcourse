import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }
  configUrl= "https://api.edamam.com/api/recipes/v2?type=public&app_id=c36b4628&app_key=82b61e2c34a25331869985e96472c1fc";

  getRecipes(query:any){
  return this.http.get(this.configUrl+"&q="+query);
}

}
