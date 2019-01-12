import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()

export class HttpService {

  constructor(private _http: HttpClient) { };

  getTask() {
    return this._http.get("/api/tasks");
  }

  getSingleTask(taskId) {
    return this._http.get(`/api/${taskId}`);
  }

  newTask(newTask) {
    return this._http.post('/api/new', newTask);
  }

  updateTask(taskId, taskData){
    console.log('Hit the Services');
    
    console.log(taskData);
    return this._http.put(`/api/update/${taskId}`,taskData);
  }

  deleteTask(taskId){
    return this._http.delete(`/api/remove/${taskId}`);
  }

}
