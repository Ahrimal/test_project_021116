import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  
@Input ('person') person: any;
@Output ('updatePersonEvent') updatePersonEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  updatePerson(stars)
  {
    console.log(stars);
    this.updatePersonEvent.emit({
        "name": this.person.name,
        "stars": stars
      })
  }
}
