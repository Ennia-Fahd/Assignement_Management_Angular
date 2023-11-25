import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AssignementsService } from '../../shared/assignements.service';
import { MatButtonModule } from '@angular/material/button';
import { Assignment } from '../assignment.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../shared/auth.service';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-assignment-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatCheckboxModule,MatButtonModule,MatTableModule],
  templateUrl: './assignment-detail.component.html',
  styleUrl: './assignment-detail.component.css'
})
export class AssignmentDetailComponent implements OnInit{
  displayedColumns: string[] = ['Devoir', 'Date'];
  /*@Input()*/ assignmentTransmis !: Assignment;

  constructor(private assignmentsService: AssignementsService, private route: ActivatedRoute,private router:Router,
    public authService:AuthService){}
  
  ngOnInit(): void {
    this.getAssignment();

  }

  getAssignment() {
    const id: number = +this.route.snapshot.params['id'];
    console.log('Assignment ID:', id);
  
    this.assignmentsService.getAssignment(id).subscribe(
      a => {
        console.log('Fetched Assignment:', a);
        this.assignmentTransmis = a;
      }
    );
  }
  
  onAssignmentRendu() {
    console.log('Updating Assignment:', this.assignmentTransmis);
    this.assignmentTransmis.rendu = true;
    this.assignmentsService.updateAssignment(this.assignmentTransmis).subscribe(
      message => console.log('Update Message:', message)
    );
  
    console.log('Navigating to /admin/home');
    this.router.navigate(['/admin/home']);
  }
  

  onDelete() {
    this.assignmentsService.
      deleteAssignment(this.assignmentTransmis)
        .subscribe(
          message => {
            console.log(message);
            this.assignmentTransmis = null;
          }
        ); 
    this.router.navigate(['/admin/home']);
  }
  onClickEdit(){
    this.router.navigate(['/admin/assignment', this.assignmentTransmis.id, 'edit'], 
    {queryParams: {nom: this.assignmentTransmis.nom}, fragment: 'edition'}
  );
  }

  
}
