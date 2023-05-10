import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Employee } from '../models/employee.interface';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiServiceUrl=environment.apiServiceUrl;

  constructor(
    private httpClient: HttpClient,

  ) { }

  public getEmployees():Observable<Employee[]>| any{
    //return this.httpClient.get<Employee[]>('${this.apiServiceUrl}/employee/all');
    return this.httpClient.get<Employee[]>(this.apiServiceUrl+'/employee/all');
  }

  public getEmployeeById(employeeId:number):Observable<Employee>| any{
    const params = new HttpParams().set("id",employeeId);
    //return this.httpClient.get<Employee[]>('${this.apiServiceUrl}/employee/find/${this.employeeId}',{params:params});
    return this.httpClient.get<Employee[]>(this.apiServiceUrl+'/employee/find/'+employeeId,{params:params});
  }

  public addEmployee(employee:Employee):Observable<Employee>{
    //return this.httpClient.post<Employee>('${this.apiServiceUrl}/employee/add',employee);
    return this.httpClient.post<Employee>(this.apiServiceUrl+'/employee/add',employee);
  }

  public updateEmployee(employee:Employee):Observable<Employee>{
    //return this.httpClient.put<Employee>('${this.apiServiceUrl}/employee/update',employee);
    return this.httpClient.put<Employee>(this.apiServiceUrl+'/employee/update',employee);
  }

  public deleteEmployee(employeeId:number):Observable<any>{
    const params = new HttpParams().set("id",employeeId);

    //return this.httpClient.delete<Employee>('${this.apiServiceUrl}/employee/delete/${this.employeeId}',{params:params});
    return this.httpClient.delete<Employee>(this.apiServiceUrl+'/employee/delete/'+employeeId,{params:params});
  }


}

