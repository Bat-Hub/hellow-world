import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmitterVisitorContext } from '@angular/compiler';

@Component({
  selector: 'star',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
   @Input('ia-activeaias') isSelected: boolean;
   @Output() change = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onClick(){
    this.isSelected = !this.isSelected;
    this.change.emit({newValue: this.isSelected});
  }

}


export interface FavoriteChangedeventArgs{
  newValue: boolean;
}