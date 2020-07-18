import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Employee} from '../models/employee.model';
import {environment} from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmployeesService {

  constructor(private http: HttpClient) { }

  endpoint = environment.employeesApiEndpoint;

  getEmployees(): Observable<Array<Employee>>{
    return this.http.get<Array<Employee>>(`${this.endpoint}employee`);
  }

  saveEmployee(employee: Employee): Observable<Employee>{
    return this.http.post<Employee>(`${this.endpoint}employee`, employee);
  }
}
