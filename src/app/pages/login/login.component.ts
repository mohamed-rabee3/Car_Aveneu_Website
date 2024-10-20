import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Password } from 'primeng/password';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router){}
  login =  new FormGroup({
    email: new FormControl("",[Validators.required, Validators.email]),
    Password: new FormControl("",[Validators.required]),
    })

    onLogin() {
      if (this.login.valid) {
        this.homeNavigate();
      } else {
        this.login.markAllAsTouched();
      }
    }

    homeNavigate(){
      this.router.navigate(['/home']);
    }
}
