import { Component, OnInit,NgModule } from '@angular/core';
import { RecipeService } from 'src/shared/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
 recipies:any=[];
 query:any;
 show:boolean =false;
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
  }

  getRecipies(){
    this.recipeService.getRecipes(this.query).subscribe((data:any)=>{
      this.recipies = data.hits;
      this.show=true;
      console.log("response is ",this.recipies);
    });
  }


}
