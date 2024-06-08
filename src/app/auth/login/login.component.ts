import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateUserDto } from '../../core/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule
    ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  error!:HttpErrorResponse | null;
  loginFormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(   private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.loginFormGroup.value);
  }
  handleLogin(): void {
    
    this.loginFormGroup.markAllAsTouched();
        if (this.loginFormGroup.valid) {
          const { username, password } = this.loginFormGroup.value;
          const body: CreateUserDto = {  
            username: username!,
            password: password!
          }
          console.log(this.loginFormGroup.value); 
          this.authService.login(body)
          .subscribe((response: any) => {
            console.log(response);
          });
        //TODO
        //   .subscribe(
        //     (data) => {this.router.navigate(['/home'])},
        //     (err) => {
              
        //       this.error=err
        //       setTimeout(() => {
        //         this.error = null
        //        }, 3000)
        //     }
        // )
        
        
      }
        
      }
}
