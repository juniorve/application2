import { HeaderComponent } from './../header/header.component';
import { InfoComponent } from './info/info.component';
import { EmployeePageComponent } from './employee-page.component';
import { EmployeePageRoutingModule, employeePageRoutingProviders } from './employee-page-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EmployeePageComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    EmployeePageRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[employeePageRoutingProviders]
})
export class EmployeePageModule { }
