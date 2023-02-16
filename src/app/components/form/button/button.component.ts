import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent {
  @Input() text = 'Button';
  @Input() type = 'button';
  @Input() apparence?: 'primary' | 'secondary' | 'pill' = 'primary';
  @Input() size?: 'form' | 'none' = 'none';
}
