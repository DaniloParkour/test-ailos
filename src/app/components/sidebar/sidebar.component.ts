import { Component } from '@angular/core';
import { 
          faBars, 
          faMagnifyingGlass,
          faStar,
          faCommentDots,
          faServer,
          faBuildingColumns
       } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  faMagnifyingGlass = faMagnifyingGlass;
  faStar = faStar;
  faCommentDots = faCommentDots;
  faServer = faServer;
  faBuildingColumns = faBuildingColumns;
  faBars = faBars;
}
