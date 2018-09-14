import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  tasks: any[];
  task : String = "";

  constructor() {
    this.tasks = [];
  }

  ngOnInit() { }

  onBlurMethod(event) {
    if(this.task.length>0){
      this.tasks.push({name: this.task, completed : false});
      this.task = "";
    }
  }

  keyDownFunction(event) {
    if(event.keyCode == 13 && this.task.length>0){
      this.tasks.push({name: this.task, completed : false});
      this.task = "";
    }
  }

  removeTask(task){
    for(let i=0; i<this.tasks.length; i++){
      if(this.tasks[i].name === task.name){
        this.tasks.splice(i,1);
      }
    }
  }

}
