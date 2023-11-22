import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenduDirective } from '../shared/rendu.directive'

import { MatButtonModule } from '@angular/material/button'
import { MatDividerModule } from '@angular/material/divider'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms'
import { MatListModule } from '@angular/material/list'; 
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Assignment } from './assignment.model';
import { AssignmentDetailComponent } from './assignment-detail/assignment-detail.component';
import { AddAssignmentComponent } from './add-assignment/add-assignment.component';
import { AssignmentsService } from '../shared/assignments.service';



@Component({
  selector: 'app-assignments',
  standalone: true,
  imports: [CommonModule,
            AddAssignmentComponent,
            AssignmentDetailComponent,
            MatListModule,
            RenduDirective,
            MatButtonModule,
            MatDividerModule,
            MatFormFieldModule,
            MatDatepickerModule,
            MatInputModule,
            MatNativeDateModule,
            FormsModule
          ],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css'
})

export class AssignmentsComponent implements OnInit{
  titre : String = 'Les Assignments de Leo Donati';
  formVisible : boolean = false;
  assignmentSelectionne !: Assignment;
  assignments !: Assignment[] ;

  constructor( private assignmentsService: AssignmentsService) { }

  ngOnInit() {
    this.assignments = this.assignmentsService.getAssignments();
  }

  onAddAssignmentBtnClick() {
    this.formVisible = true;
  }

  assignmentClique(assignment: Assignment) {
    console.log("Assignment cliqué : " + assignment.nom);
    this.assignmentSelectionne = assignment;
  }

  onNouvelAssignment(event: Assignment) {
    this.assignments.push(event);
    this.formVisible = false;
  }
}