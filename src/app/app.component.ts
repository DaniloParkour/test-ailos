import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'desafio-ailos';

  containsCardData = false;

  cardDataChanged(event: any) {
    if(event)
      this.containsCardData = true;
  }
}
