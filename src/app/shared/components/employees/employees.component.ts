import { Department } from './../../models/department.model';
import { Employee } from './../../models/employee.model';
import { EmployeesService } from './../../services/employees.service';
import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employee: Employee = {
    name: '',
  };

  department: Department = {
    name: ''
  };

  formEmployee: FormGroup = new FormBuilder().group({
    employeeName: [null, [Validators.minLength(3), Validators.pattern('ren.*')]],
    departmentName: [null, Validators.minLength(3)],
  });

  employeeList: Array<Employee> = [];

  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {

    this.getEmployees();
  }

  getEmployees(): void{
    this.employeesService.getEmployees().subscribe((employeeList: Array<Employee>) => {
      this.employeeList = employeeList;
    });
  }

  hasError(controlName: string): string{
    const inputValidation = this.formEmployee.get(controlName);
    if (inputValidation.invalid){
      return 'error';
    }
    return '';
  }

  getErrors(controlName: string): string{
    const inputValidation = this.formEmployee.get(controlName);
    const hasError = !!inputValidation.errors;
    const patternError = hasError && inputValidation.errors.pattern;

    if (patternError){
      return 'Formato invalido';
    }
    return '';
  }

  saveEmployee(): void{
    if (this.formEmployee.valid){
      this.employeesService.saveEmployee(this.employee).subscribe(() => {
        this.getEmployees();
      });
      return;
    }
    alert('não pode');
  }


}
