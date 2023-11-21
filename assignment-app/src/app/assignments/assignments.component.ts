import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { RenduDirective } from '../shared/rendu.directive';

@Component({
  selector: 'app-assignments',
  standalone: true,
  imports: [CommonModule, RenduDirective],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css'
})
export class AssignmentsComponent implements OnInit{
  titre : String = 'Mon application sur les Assignments';

  assignments = [
    {
      nom: 'Devoir de Maths',
      dateDeRendu : '2024-10-10',
      rendu: false
    },
    {
      nom: 'Projet Angular',
      dateDeRendu : '2023-11-10',
      rendu: false
    },
    {
      nom: 'TP noté de Python',
      dateDeRendu : '2023-11-10',
      rendu: true
    },
    {
      nom: 'TP4',
      dateDeRendu : '2020-10-10',
      rendu: true
    }
];
   

  ngOnInit() {
  }

}
