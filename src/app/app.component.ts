import { Component } from '@angular/core';
import { FavoriteChangedeventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
post = {
  title: "Title",
  isActive: true
  }  
  onStarChanged(eventargs: FavoriteChangedeventArgs){
    console.log("Star changed: "+ eventargs.newValue)
  }
}
