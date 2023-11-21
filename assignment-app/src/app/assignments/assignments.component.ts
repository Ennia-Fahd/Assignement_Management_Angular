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

export class AssignmentsComponent implements OnInit {
  
  titre : String = 'Mon app sur les assignments :)';
  assignments:Assignment[] = [
    { nom : 'TP1 sur Angular',
      dateDeRendu : new Date('2023-11-20'),
      rendu : true
    },
    {
      nom : 'TP2 sur Scrum',
      dateDeRendu : new Date('2023-09-10'),
      rendu : false      
    },
    {
      nom : 'TP3 sur Grails',
      dateDeRendu : new Date('2023-10-15'),
      rendu : false
    },
    {
      nom : 'TP4 sur Groovy',
      dateDeRendu : new Date('2023-10-16'),
      rendu : true
    }
  ]

  assignmentSelectionne !: Assignment;
  formVisible = false;

  
  ngOnInit() {
  }

  onAddAssignmentBtnClick() {
    this.formVisible = true;
  }

  assignmentClique(assignment: Assignment) {
    console.log("Assignment cliqué : " + assignment.nom);
    this.assignmentSelectionne = assignment;
  }

}