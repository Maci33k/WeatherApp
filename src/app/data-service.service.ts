import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  apiUrl = "http://localhost:3000/users";
  createUrl = "http://localhost:3000/user";

  getAllData() : Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  updateData(data : any, id : any) : Observable<any> {
    let ids = id;
    return this.http.put(`${this.createUrl}/${ids}`,data);
  }

}
