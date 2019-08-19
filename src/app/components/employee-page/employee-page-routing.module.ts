import { EmployeePageComponent } from './employee-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
      { path: 'employee-page', component: EmployeePageComponent}
];

export const employeePageRoutingProviders: any[] = [];
@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class EmployeePageRoutingModule {}

 

