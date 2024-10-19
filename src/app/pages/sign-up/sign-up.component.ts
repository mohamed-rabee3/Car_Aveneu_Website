import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Password } from 'primeng/password';
import { Router } from '@angular/router';


@Component({
  selector: 'app-SignUp',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  constructor(private router: Router){}
  signup =  new FormGroup({
    email: new FormControl("",[Validators.required, Validators.email]),
    username: new FormControl("",[Validators.required]),
    phone: new FormControl("",[Validators.required]),
    Password: new FormControl("",[Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl("",[Validators.required, Validators.minLength(6)])
    })

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
