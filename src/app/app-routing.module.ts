import { EmployeeHomeComponent } from './pages/Employee/employee-home/employee-home.component';
import { EmployeeloginComponent } from './pages/Employee/employeelogin/employeelogin.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EmpDashboardComponent } from './pages/Employee/emp-dashboard/emp-dashboard.component';
import { MenusComponent } from './pages/Employee/menus/menus.component';
import { CalendarViewComponent } from './pages/Employee/calendar-view/calendar-view.component';
import { LeaveComponent } from './pages/Employee/leave/leave.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'employee', component: EmployeeloginComponent},
  {path:'employee/dashboard', component: EmpDashboardComponent,
   children:[
    { path:'', component: EmployeeHomeComponent},
    { path:'salary', component: MenusComponent},
    { path:'leave', component: MenusComponent},
    { path:'leave/holiday', component: CalendarViewComponent},
    { path:'leave/manage', component: LeaveComponent}

  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


