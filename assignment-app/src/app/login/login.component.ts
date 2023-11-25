import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { User } from './user.model';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,MatInputModule,MatButtonModule,MatFormFieldModule,MatCardModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  userFormGroup!: FormGroup;
  errMessage:String;

  constructor(private fb:FormBuilder , private authService:AuthService , private router:Router){

  }
  ngOnInit(): void {
    this.userFormGroup=this.fb.group({
      username :this.fb.control(""),
      password :this.fb.control("")
    });
  }
  
  handleLogin() {
    let username = this.userFormGroup.value.username;
    let password = this.userFormGroup.value.password;
  
    this.authService.login(username, password).subscribe({
      next: (userOrError: User | { error: string }) => {
        if ('error' in userOrError) {
          // Handle the error condition, e.g., display an error message
          this.errMessage = userOrError.error;
        } else {
          // Assuming authenticate returns an observable
          this.authService.authenticate(userOrError).subscribe({
            next: (date) => {
              this.router.navigateByUrl("/admin/home");
            },
            error: (authError) => {
              // Handle authentication error
              console.error(authError);
            }
          });
        }
      },
      error: (loginError) => {
        // Handle login error
        console.error(loginError);
      }
    });
  }
  

}
