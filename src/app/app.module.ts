import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeManagerModule } from './modules/employee-manager/employee-manager.module';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { EmployeeService } from './services/employee.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    EmployeeManagerModule,
    AppRoutingModule

  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
