import { Department } from './../models/department.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  endpoint = environment.departmentsEndpoint;

  constructor(private http: HttpClient) { }

  getDepartments(): Observable<Array<Department>>{
    return this.http.get<Array<Department>>(`${this.endpoint}departments`);
  }
}
