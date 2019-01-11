import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()

export class HttpService {

  constructor( private _http: HttpClient ) {};

  getTask(){
    return this._http.get("/api/tasks");
  }

  getSingleTask(taskId){
    return this._http.get(`/api/${taskId}`);
  }

  postTask(formData){
   return this._http.post('/new', formData);
  }

}
