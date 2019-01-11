import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service'
import { observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  tasks:string[];
  loggedIn: boolean;
  show:boolean;
  showDetails:boolean;
  i:number = 0;
  singleTask:any;

  constructor(private _httpService: HttpService) { };

  ngOnInit() {
    this.loggedIn = true;

  }

  getTasksFromService() {
    let observable = this._httpService.getTask();
    observable.subscribe(data => {
      console.log("Here are your tasks", data['data'])
      this.tasks = data['data'];
    });
  }

  onButtonClick(title:string, description:string){
    // let observable = this._httpService.postTask({title:title, description:description});
    // observable.subscribe(data => console.log(`Posted our data.`, data));
    this.getTasksFromService();
    this.show = true;
  }

  getTaskDetails(taskid:string){
    console.log(taskid);
    let observable = this._httpService.getSingleTask(taskid);
    observable.subscribe(task => {
      console.log("Here is one single task",task);
      this.singleTask = task['data'][0];
      console.log(this.singleTask);
      
      this.showDetails = true;
    });
  }



}
