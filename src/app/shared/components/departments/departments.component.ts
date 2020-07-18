import { DepartmentsService } from './../../services/departments.service';
import { Department } from './../../models/department.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  departmentList: Array<Department> = [];

  constructor(private departmentsService: DepartmentsService) { }

  ngOnInit(): void {
    this.departmentsService.getDepartments().subscribe((departmentList) => {
      this.departmentList = departmentList;
    });
  }

}
