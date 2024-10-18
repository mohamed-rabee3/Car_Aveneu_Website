import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Password } from 'primeng/password';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-password',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './new-password.component.html',
  styleUrl: './new-password.component.css'
})
export class NewPasswordComponent {

  constructor(private router : Router){}
  newPassword =  new FormGroup({
    Password: new FormControl("",[Validators.required]),
    confirmPassword: new FormControl("",[Validators.required]),
    })

    loginNavigate(){
      this.router.navigate(['/login']);
    }
}
