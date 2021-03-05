import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateAccountComponent } from 'src/app/account/create-account/create-account.component';
import { LoginComponent } from 'src/app/account/login/login.component';
import { AuthGuard } from 'src/app/account/shared/auth.guard';
import { AuthenticationComponent } from 'src/app/layout/authentication/authentication.component';
import { HomeComponent } from 'src/app/layout/home/home.component';
import { TaskFormComponent } from 'src/app/tasks/task-form/task-form.component';
import { TaskListComponent } from 'src/app/tasks/task-list/task-list.component';


const routes: Routes = [
  { 
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: TaskListComponent },
      { path: 'new', component: TaskFormComponent},
      { path: 'edit/:id', component: TaskFormComponent },
    ],
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent},
      { path: 'create-account', component: CreateAccountComponent}

    ]
  }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
