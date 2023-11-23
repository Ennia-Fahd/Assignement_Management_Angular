import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import {Observable, of} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  assignments : Assignment[] = [
    {
      nom: 'Devoir de Maths',
      dateDeRendu : new Date('2023-10-10'),
      rendu: false
    },
    {
      nom: 'Projet Angular',
      dateDeRendu : new Date('2023-10-11'),
      rendu: false
    },
    {
      nom: 'TP noté de Python',
      dateDeRendu : new Date('2023-10-12'),
      rendu: true
    },
    {
      nom: 'TP4',
      dateDeRendu : new Date('2023-10-12'),
      rendu: true
    }
  ];

  constructor() { }

  getAssignments(): Observable<Assignment[]> {
    return of(this.assignments);
  }
  addAssignment(assignment: Assignment): Observable<String> {
    this.assignments.push(assignment);
    return of("Assignment service ; ajout de  : " + assignment.nom);
  }
}