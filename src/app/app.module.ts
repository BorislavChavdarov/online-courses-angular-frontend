import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { AuthModule } from './auth/auth.module';


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
