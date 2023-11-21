import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { AssignmentsComponent } from '../assignments/assignments.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule,AssignmentsComponent,RouterOutlet,MatButtonModule,MatDividerModule,MatIconModule,MatToolbarModule,MatSidenavModule,MatListModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
