import { Component, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { AssignmentsComponent } from './assignments/assignments.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSidenav } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterOutlet , Router } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AuthService } from './shared/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminTemplateComponent } from './admin-template/admin-template.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatButtonModule,AdminTemplateComponent, MatDividerModule, AssignmentsComponent , MatToolbarModule , MatIconModule, MatSidenavModule , MatListModule, RouterLink,RouterOutlet,MatSlideToggleModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'StudySprint: Votre application de gestion des devoirs à rendre';

    constructor(public authService:AuthService){
    }
}
