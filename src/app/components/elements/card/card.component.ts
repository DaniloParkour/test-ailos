import { Component, Input } from '@angular/core';
import { faCircleCheck, faCreditCard } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { InfoFields } from 'src/app/dos/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {

  faUser = faUser;
  faCircleCheck = faCircleCheck;
  faCreditCard = faCreditCard;

  @Input() title = "";
  @Input() subTitle = "";

  @Input() infos: Array<InfoFields> = [];

}
