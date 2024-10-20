import { Component } from '@angular/core';
import {  FormGroup, Validators, FormControl,ReactiveFormsModule, AbstractControl, ValidatorFn   } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Password } from 'primeng/password';
import { Router } from '@angular/router';


@Component({
  selector: 'app-SignUp',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  passwordMismatch: boolean = false;
  constructor( private router: Router) {}
  signup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    username: new FormControl("", [Validators.required]),
    phone: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required, Validators.minLength(6)]), 
    confirmPassword: new FormControl("", [Validators.required, Validators.minLength(6)])
  }, { validators: this.passwordMatchValidator() });

  passwordMatchValidator(): ValidatorFn {
    return (group: AbstractControl): { [key: string]: any } | null => {
      const password = group.get('password')?.value;  
      const confirmPassword = group.get('confirmPassword')?.value;
  
      return password && confirmPassword && password !== confirmPassword
        ? { passwordMismatch: true }
        : null;
    };
  }
  

  
    onsignup() {
      if (this.signup.valid) {
        this.loginNavigate();
      } else {
        this.signup.markAllAsTouched(); 
      }
    }

    loginNavigate(){
      this.router.navigate(['/login']);
    }
}
