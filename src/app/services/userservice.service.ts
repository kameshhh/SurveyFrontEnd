import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }

  public addUser(user:any){
    return this.http.post(`${baseUrl}/user/`,user)

  }

  getuserlist():Observable<any>{
    return this.http.get("http://localhost:8080/user/alluserdetails");
  }

  public deleteUserById(qId: any) {
    return this.http.delete(`${baseUrl}/user/${qId}`);
  }

  public updateUser(user: any) {
    return this.http.put(`${baseUrl}/user`, user);
  }

  
}
