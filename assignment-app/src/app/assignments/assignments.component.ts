import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenduDirective } from '../shared/rendu.directive'

import { MatButtonModule } from '@angular/material/button'
import { MatDividerModule } from '@angular/material/divider'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms'

import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Assignment } from './assignment.model';


@Component({
  selector: 'app-assignments',
  standalone: true,
  imports: [CommonModule,
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
  ajoutActive = false;
  nomDevoir:string = "";
  dateDeRendu! : Date 
  assignmentSelectionne !: Assignment;

  
  ngOnInit() : void {
    setTimeout(() => {
      this.ajoutActive = true;
    }, 2000);
  }

  onSubmit() {
    const newAssignment = new Assignment();
    newAssignment.nom = this.nomDevoir;
    newAssignment.dateDeRendu = this.dateDeRendu;
    newAssignment.rendu = false;
    console.log(newAssignment);
    this.assignments.push(newAssignment);
  }
 
  assignmentClique(assignment: Assignment) {
    console.log("Assignment cliqué : " + assignment.nom);
    this.assignmentSelectionne = assignment;
  }

}