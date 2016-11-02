import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

@Input('grid') grid: any;
@Output('updateGrid') updateGrid = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  updatePerson(event)
  {
    this.updateGrid.emit(event);
  }
}
