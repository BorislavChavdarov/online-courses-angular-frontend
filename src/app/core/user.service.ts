import { Injectable } from "@angular/core";

export interface CreateUserDto { username: string, password: string }

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
}