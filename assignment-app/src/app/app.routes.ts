import { Routes } from '@angular/router';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AddAssignmentComponent } from './assignments/add-assignment/add-assignment.component';
import { AssignmentDetailComponent } from './assignments/assignment-detail/assignment-detail.component';
import { EditAssignmentComponent } from './edit-assignment/edit-assignment.component';
import { LoginComponent } from './login/login.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { authGuard } from './shared/auth.guard';



export const routes: Routes = [
    {path:'',component:AssignmentsComponent},
    {path:'login',component:LoginComponent},
    {path:'admin',component:AdminTemplateComponent,canActivate:[authGuard],children:[
        {path:'home',component:AssignmentsComponent},
        { path: 'add', component: AddAssignmentComponent},
        { path: 'assignment/:id', component: AssignmentDetailComponent},
        { path: 'assignment/:id/edit', component: EditAssignmentComponent},
    ]},
    
];
