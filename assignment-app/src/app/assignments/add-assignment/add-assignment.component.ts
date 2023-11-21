import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Assignment } from '../assignment.model';


@Component({
  selector: 'app-add-assignment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-assignment.component.html',
  styleUrl: './add-assignment.component.css'
})
export class AddAssignmentComponent {
  nomDevoir : string = '';
  dateDeRendu : Date = new Date();

  onSubmit() {
    console.log("Ajout de assignment " + this.nomDevoir);
    const newAssigment : Assignment = new Assignment();
    newAssigment.nom = this.nomDevoir;
    newAssigment.dateDeRendu = this.dateDeRendu;
    newAssigment.rendu = false;

    //this.assignments.push(newAssigment);
  }
  
}
