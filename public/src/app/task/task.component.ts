import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() singleTask: any;
  @Output() event = new EventEmitter();
  
  constructor() { }
  
    edit(){
      this.event.emit();
    }
}
