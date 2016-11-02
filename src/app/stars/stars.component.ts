import { Component, OnInit, Input, Output, EventEmitter, OnChanges} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  numberStars: Array<any>;

  constructor(
  ) { 
    
  }

@Input ('stars') stars: number;
@Output ('updateStar') updateStar = new EventEmitter();
  ngOnInit() {  
    this.numberStars = Array(5).fill(5).map((x,i) => i < this.stars);
  }

  updateStars(indexStar)
  {
    console.log(indexStar);
    // this.stars = indexStar;
    this.updateStar.emit(indexStar);
  }

  ngOnChanges(){
     this.ngOnInit();
  }
}
