import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from '../auth.service';



@NgModule({
  declarations: [
    LoginComponent,
    AuthService
  ],
  imports: [
    CommonModule,
    AppComponent,
    AuthService
  ],
  providers:[AuthModule]
})
export class AuthModule { }
