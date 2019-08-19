import { HomePageComponent } from './home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
      { path: 'home-page', component: HomePageComponent},
      { path: 'employee',   loadChildren: '../employee-page/employee-page.module#EmployeePageModule'}
];

export const homePageRoutingProviders: any[] = [];
@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class HomePageRoutingModule {}

 

