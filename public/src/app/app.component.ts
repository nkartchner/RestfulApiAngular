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

  constructor(private _httpService: HttpService) { };

  ngOnInit() {
    this.getTaskFromService();
    this.loggedIn = true;
    // this.tasks;
  }

  getTaskFromService() {
    let observable = this._httpService.getTask();
    observable.subscribe(data => {
      console.log("Here are your tasks", data['data'])
      this.tasks = data['data'];
    });
    
  }
}
