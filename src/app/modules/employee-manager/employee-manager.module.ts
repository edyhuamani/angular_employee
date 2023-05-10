import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],exports:[
    HttpClientModule,
    BrowserModule,
    FormsModule
  ]
})
export class EmployeeManagerModule { }
