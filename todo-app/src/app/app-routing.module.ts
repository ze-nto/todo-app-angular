import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskFormComponent } from 'src/app/tasks/task-form/task-form.component';
import { TaskListComponent } from 'src/app/tasks/task-list/task-list.component';


const routes: Routes = [
  {
    path: '',
    component: TaskListComponent
  },
  {
    path: 'new', 
    component: TaskFormComponent
  },
  {
    path: 'edit/:id',
    component: TaskFormComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
