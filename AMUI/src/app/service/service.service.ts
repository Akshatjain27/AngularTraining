import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http : HttpClient) { }

  url:string="http://localhost:3000/posts";
  u:User= new User();
  private eventCallback = new Subject<User>(); // Source
  eventCallback$ = this.eventCallback.asObservable();

  getAllData(): Observable<any> 
  {
    return this.http.get(`${this.url}`);
  }

  getData(uid:number): Observable<any>
  {
    return this.http.get<any>(`${this.url}/${uid}`)
  }

  postData(data: any): Observable<any> 
  {
    return this.http.post(`${this.url}`, data);
  }

  updateData(data: any): Observable<any> 
  {
    console.log('update', data);
    return this.http.put(`${this.url}/${data.empNo}`, data)
  }

  deleteData(uid: number): Observable<any>{
      return this.http.delete<any>(`${this.url}/${uid}`)
  }

  onEditClicked(user: User) {
    console.log('service', user);
    this.eventCallback.next(user);
  }
}
