import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/tasks/shared/task';
import { TaskService } from 'src/app/tasks/shared/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] =[]

  constructor(
    private taskService: TaskService) { }

  ngOnInit() {
     this.taskService.getAll().subscribe(tasks => {
       this.tasks = tasks
      });
  }

  onTaskDeleted(task: Task){
    if(task){
      const index = this.tasks.findIndex((taskItem) => taskItem._id == task._id);
      this.tasks.splice(index, 1)
    }
  }

}
