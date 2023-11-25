import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AssignmentsComponent } from '../assignments/assignments.component';
import { AuthService } from '../shared/auth.service';


@Component({
  selector: 'app-admin-template',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDividerModule, AssignmentsComponent , MatToolbarModule , MatIconModule, MatSidenavModule , MatListModule, RouterLink,RouterOutlet,MatSlideToggleModule,ReactiveFormsModule],
  templateUrl: './admin-template.component.html',
  styleUrl: './admin-template.component.css'
})
export class AdminTemplateComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  title = 'StudySprint: Votre application de gestion des devoirs à rendre';

  constructor(public authService:AuthService,private router:Router){}

  

  toggleSidenav() {
    this.sidenav.toggle();
  }

  closeSidenav() {
    this.sidenav.close();
  }

  handleLougout(){
    this.authService.Logout().subscribe(
      {
        next:(Data)=>{
          this.router.navigateByUrl("/login");
        }
      }
    )
  }


}
