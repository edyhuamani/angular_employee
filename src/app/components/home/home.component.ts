import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/models/employee.interface';
import { EmployeeService } from 'src/app/services/employee.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public employees: Employee[] = [];
  public employee: Employee | undefined
  public editEmployee: Employee | undefined
  public deleteEmployee: Employee | undefined


  constructor(
    private employeeService: EmployeeService
  ) {

  }
  ngOnInit(): void {
    console.log("--------------ngOnInit----------------");
    this.getEmployees();

    /*
    this.employeeService.getEmployees()
      .subscribe({
        next: (v: any) => console.log(v),
        error: (e: any) => console.log(e),
        finally: () => console.log("finalizado")
      });
    */

  }

  public getEmployees(): Observable<any> | any {
    console.log("--------------getEmployees----------------");
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response
        console.log(response)
      },
      (error: HttpErrorResponse) => { console.log(error) },
      () => { console.log("Finalizado") }
    )

  };


  public onAddEmloyee(addForm:NgForm):void {
    console.log("--------------onAddEmloyee----------------");

    this.employeeService.addEmployee(addForm.value).subscribe({
      next:(data:Employee)=> {
        console.log(data)
        this.getEmployees();
        addForm.reset();
      },
      error:(error:HttpErrorResponse)=>{
        console.log("Ocurrio un error "+error.message)
      }
    });


  }

  public onDeleteEmloyee(id:number| any) {
    console.log("--------------onDeleteEmloyee----------------");


    this.employeeService.deleteEmployee(id).subscribe({
      next:(data:Employee)=> {
        console.log(data)
        this.getEmployees();
      }
    });

  }

  public onUpdateEmloyee(addForm:NgForm):void {
    console.log("--------------onUpdateEmloyee----------------");

    this.employeeService.updateEmployee(addForm.value).subscribe({
      next:(data:Employee)=> {
        console.log(data)
        this.getEmployees();
        addForm.reset();
      },
      error:(error:HttpErrorResponse)=>{
        console.log("Ocurrio un error "+error.message)
      }

    });

  }

  public onOpenModal(employee:Employee|any,mode:string):void {
    console.log("--------------onOpenModal----------------");
    const container =document.getElementById('main-container')
    const button = document.createElement('button')
    button.type='button';
    button.style.display='none'
    button.setAttribute('data-toggle','modal')
    if (mode==='add'){
      button.setAttribute("data-target","#addEmployeeModal")
      this.employee = employee;
    } else if(mode==='edit') {
      button.setAttribute("data-target","#updateEmployeeModal")
      this.editEmployee = employee;
    } else if(mode==='delete'){
      button.setAttribute("data-target","#deleteEmployeeModal")
      this.deleteEmployee=employee
    }
    container?.appendChild(button)
    button.click();
  }


  public searchEmployees(key:string):void{
    const results:Employee[]=[];
    this.employees.forEach(employee => {
      if (
        employee.name.toLowerCase().indexOf(key.toLowerCase())!==-1
        || employee.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || employee.phone.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || employee.jobTitle.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ){
        results.push(employee);
      }

      this.employees = results;
      if (results.length === 0 || !key) {
        this.getEmployees();
      }
    });

  }
}





