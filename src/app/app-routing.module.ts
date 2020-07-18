import { DepartmentsComponent } from './shared/components/departments/departments.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './shared/components/employees/employees.component';


const routes: Routes = [
  {path: '', component: EmployeesComponent},
  {path: 'departments', component: DepartmentsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
