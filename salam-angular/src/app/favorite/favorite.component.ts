import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  
@Input("is-Active") isActive=true;
@Input() item;
@Output("change") click = new EventEmitter;

  onClick(){
      this.isActive = !this.isActive;
      this.click.emit({newState:this.isActive,id:1});
  }
  constructor() { }

  ngOnInit(): void {
  }
  

}
