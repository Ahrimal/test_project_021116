import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  gridData =  {
    "Hairdressers":  [
      {
        "name": "Maria",
        "stars": 3,
        "photo": "http://uscdn02.mundotkm.com/2015/08/cara-31.jpg",
        "estils": ["estil1", "estil2", "estil3"],
        "photos": ["http://uscdn02.mundotkm.com/2015/08/cara-31.jpg","http://uscdn02.mundotkm.com/2015/08/cara-31.jpg","http://uscdn02.mundotkm.com/2015/08/cara-31.jpg"]
      },
      {
        "name": "Mariano",
        "stars": 1,
        "photo": "http://fernandocara.com/wp-content/gallery/corteshombre2014/fernando-cara-corte-chico-4.jpg",
        "estils": ["estil1", "estil2", "estil3"],
        "photos": ["http://uscdn02.mundotkm.com/2015/08/cara-31.jpg","http://uscdn02.mundotkm.com/2015/08/cara-31.jpg","http://uscdn02.mundotkm.com/2015/08/cara-31.jpg"]
      },
      {
        "name": "Juanjo",
        "stars": 4,
        "photo": "http://i36.tinypic.com/2lcbl9x.jpg",
        "estils": ["estil1", "estil2", "estil3"],
        "photos": ["http://uscdn02.mundotkm.com/2015/08/cara-31.jpg","http://uscdn02.mundotkm.com/2015/08/cara-31.jpg","http://uscdn02.mundotkm.com/2015/08/cara-31.jpg"]
      }
    ]    
  }

  updateData(event)
  {
    
    this.gridData.Hairdressers.forEach(e => {
      if(e.name === event.name){
          e.stars = event.stars;
      }
    });
    console.log(this.gridData);
  }
}
