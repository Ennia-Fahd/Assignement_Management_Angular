import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';

import { RenduDirective } from '../shared/rendu.directive';
import { Assignment } from './assignment.model';
import { AssignmentDetailComponent } from './assignment-detail/assignment-detail.component';
import { AddAssignmentComponent } from './add-assignment/add-assignment.component';

import { MatListModule } from '@angular/material/list'; 
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { AssignementsService } from '../shared/assignements.service';
import { Observable,of } from 'rxjs';
import { RouterLink } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { AdminTemplateComponent } from '../admin-template/admin-template.component';
import {MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-assignments',
  standalone: true,
  imports: [CommonModule,MatTableModule,AdminTemplateComponent,RenduDirective, MatListModule, MatDividerModule, AssignmentDetailComponent, AddAssignmentComponent, MatButtonModule ,RouterLink ],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css'
})
export class AssignmentsComponent implements OnInit{
  formVisible : boolean = false;
  assignmentSelectionne !: Assignment;

  assignments !: Assignment[];
  displayedColumns: string[] = ['No', 'Devoir', 'Date','Rendu','Action'];

  constructor(private assignmentsService:AssignementsService,public authService:AuthService){
  }
   
  ngOnInit() {
    //this.assignments=this.assignmentsService.getAssignments();
    this.getAssignments();
  }
  getAssignments(){
    this.assignmentsService.getAssignments()
    .subscribe(assignments=>this.assignments=assignments)
  }


  onAddAssignment() {
    //this.formVisible = true;
  }

  assignmentClique(assignment: Assignment) {
    console.log("Assignment cliqué : " + assignment.nom);
    this.assignmentSelectionne = assignment;
  }

  /*onNouvelAssignment(event: Assignment) {
    //this.assignments.push(event);
    this.assignmentsService.addAssignment(event)
    .subscribe(message => console.log(message));
      
    this.formVisible = false;
  }
  */
}
