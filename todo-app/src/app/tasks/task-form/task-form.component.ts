import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/tasks/shared/task';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})

export class TaskFormComponent implements OnInit {

  task: Task = new Task();
  title: string = 'Nova Tarefa'

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.taskService.getById(id).subscribe( task => {
        this.task = task;
        this.title = 'Alterando uma tarefa'
      });
    }
  }

  onSubmit(){
    this.taskService.save(this.task).subscribe(task =>{

      this.router.navigate(['']);
    })
  }

}
