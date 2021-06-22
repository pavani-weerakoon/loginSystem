import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http: HttpClient) { }
  public userRegister(userName: string, password: string): Observable<any>{
    return this.http.post('http://127.0.0.1:3000/api/v1/AdminUserRoutes/user', {
      userName, password
    });
  }

  public loginuser(userName: string, password: string): Observable<any>{
    return this.http.get('http://127.0.0.1:3000/api/v1/AdminUserRoutes/loginuser', {

      headers: {userName, password}

    });
  }
}
