import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { employee } from '../model/employee';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http : HttpClient) { }
  url:string="http://localhost:5000/api/Employees";
  e:employee= new employee();
  getAllData(): Observable<any> 
  {
    console.log('GET Employee', this.http.get(this.url));
    return this.http.get(`${this.url}`);
  }

  getData(empId:number): Observable<any>
  {
    return this.http.get<any>(`${this.url}/${empId}`)
  }

  postData(data: any): Observable<any> 
  {
    console.log(data);
    return this.http.post(`${this.url}`, data);
  }

  updateData(data: any): Observable<any> 
  {
    return this.http.put(`${this.url}/${data.empId}`, data)
  }

  deleteData(empId: number): Observable<any>{
      return this.http.delete<any>(`${this.url}/${empId}`)
  }
}
