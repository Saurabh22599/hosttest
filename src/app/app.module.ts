import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeloginComponent } from './pages/Employee/employeelogin/employeelogin.component';
import { AdminLoginComponent } from './pages/Admin/admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { EmpDashboardComponent } from './pages/Employee/emp-dashboard/emp-dashboard.component';
import { EmployeeHomeComponent } from './pages/Employee/employee-home/employee-home.component';
import { MenusComponent } from './pages/Employee/menus/menus.component';
import { CalendarViewComponent } from './pages/Employee/calendar-view/calendar-view.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { LeaveComponent } from './pages/Employee/leave/leave.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeloginComponent,
    AdminLoginComponent,
    EmpDashboardComponent,
    EmployeeHomeComponent,
    MenusComponent,
    CalendarViewComponent,
    LeaveComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    FullCalendarModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
