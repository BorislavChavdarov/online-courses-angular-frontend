import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './services/auth/auth.service';


@NgModule({
  declarations: [
    AppModule,
    AuthService
  ],
  imports: [
    CommonModule,
    AuthModule,
  ],
  providers:[
    AuthService
  ]
})
export class AppModule { }
