import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
  newPassword: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    this.newPassword = this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordsMatchValidator }); 
  }

  passwordsMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('Password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { passwordMismatch: true };
  }


  onConfirm() {
    if (this.newPassword.valid) {
      this.loginNavigate();
    } else {
      this.newPassword.markAllAsTouched();
    }
  }


  loginNavigate() {
    this.router.navigate(['/login']);
  }


  get passwordMismatch() {
    return this.newPassword.errors?.['passwordMismatch'];
  }
}
