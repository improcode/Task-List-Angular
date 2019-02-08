import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {TasksService} from '../services/tasks.service';
import {Task} from '../models/task';


@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

  tasksList = [];

  constructor(private tasksService: TasksService) {
    this.tasksService.getTasksListObs().subscribe((tasks: Array<Task>) => {
      this.tasksList = tasks.slice();
    });
  }

  ngOnInit(): void {
  }

  remove(task: Task) {
    this.tasksService.remove(task);
  }

  done(task: Task) {
    this.tasksService.remove(task);
    task.end = new Date();
    this.tasksService.done(task);
  }
}
