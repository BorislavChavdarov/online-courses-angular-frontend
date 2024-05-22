import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, tap, throwError } from 'rxjs';
import { IUser } from './core/interfaces/user';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
  
})
export class AuthService {
  private loggedIn = false;
  private logger = new BehaviorSubject<boolean>(Boolean(localStorage.getItem("currentUser")));
 
  isLoggedIn(): Observable<boolean> {
    return this.logger.asObservable();
  }
  constructor(private httpClient: HttpClient) { }

  login(userData: {username:string, password:string}): any/*Observable<IUser>*/ {
    console.log("login auth service")

    //TODO
    return this.httpClient
    .post(`${environment.apiUrl}/api/users/login`, userData, {responseType:'text'})
   .pipe(
    map(value => {
      localStorage.setItem("currentUser", value)
      this.loggedIn = true;
    this.logger.next(this.loggedIn);
      return true;
    }),
    catchError(err => {
      console.error('HTTP ERROR: ', err);
      return throwError(err);
    })
    
   
 )
    
  }
}
