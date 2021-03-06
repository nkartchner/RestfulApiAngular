import { Component, OnInit } from '@angular/core';
import { TaskComponent as Task } from './task/task.component';
import { HttpService } from './http.service'
import { observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showDetails: boolean = false;
  loggedIn: boolean = false;
  editForm: boolean = false;
  newForm: boolean = false;

  tasks: string[];
  index: number;
  newTask: any;
  singleTask = {
    _id: "",
    title: "",
    description: "",
    completed: false
  }

  constructor(private _httpService: HttpService) { };

  ngOnInit() {
    this.loggedIn = true;
    this.newTask = { title: "", description: "" };
    this.getTasksFromService();
  }

  getTasksFromService() {
    let observable = this._httpService.getTask();
    observable.subscribe(data => {
      this.tasks = data['data'];
    });
  }

    ToggleEditForm(event){
      console.log(event);
      this.edit();
    }

  submitEdit() {
    console.log('submiting edit');
    console.log(this.singleTask);
    this._httpService.updateTask(this.singleTask._id, this.singleTask).subscribe(data => {
      console.log("I got the data back");
      
      console.log(data['data']);
      // this.tasks[this.index]['completed'] = data['data']['completed'];
      console.log("Trying to change the data in the array");
      this.tasks[this.index] = data['data'];
      console.log(this.tasks[this.index]);
      console.log("DID IT WORK?");
    });
    this.showDetails = false;
    this.editForm = false;
    
  }

  edit() {
    this.editForm = !this.editForm;
  }


  submitNewTask() {
    this._httpService.newTask(this.newTask).subscribe(data => {
      console.log(data);

      this.tasks.push(data['data']);
    });
    this.newForm = !this.newForm;
    this.newTask = { title: "", description: "" }
  }

  toggleCreateForm() {
    this.editForm = false;
    this.showDetails = false;
    this.newForm = !this.newForm;
  }


  Details(task: any, index: number) {
    this.showDetails = true;
    this.editForm = false;
    console.log(task);     
    this.index = index;
    this.singleTask = task;
    this.showDetails = true;
    
    // let observable = this._httpService.getSingleTask(task._id);
    // observable.subscribe(task => {
    //   this.index = index;
    //   this.singleTask = task['data'][0];
    //   this.showDetails = true;
    // });
  }

  delete(taskID: string) {
    return this._httpService.deleteTask(taskID).subscribe(data => {
      this.editForm = false;
      this.showDetails = false;
    });
  }
}


