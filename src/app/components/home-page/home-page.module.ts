import { EmployeeListItemComponent } from './employee-list/employee-list-item/employee-list-item.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomePageComponent } from './home-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageRoutingModule, homePageRoutingProviders } from './home-page-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material.module';
import { EmployeePageModule } from '../employee-page/employee-page.module';

@NgModule({
  declarations: [
    HomePageComponent,
    EmployeeListComponent,
    SearchBarComponent,
    EmployeeListItemComponent
  ],
  imports: [
    EmployeePageModule,
    CommonModule,
    MaterialModule,
    HomePageRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[homePageRoutingProviders]
})
export class HomePageModule { }
