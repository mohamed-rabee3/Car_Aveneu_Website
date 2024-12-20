import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class FooterComponent {
  constructor(private toastr: ToastrService) {}

  emailForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  onSubmit() {
    if (this.emailForm.valid) {
      this.showSuccess();
    } else {
      this.showError();
    }
  }

  showSuccess() {
    this.toastr.success('Thank you! Your message has been sent.');
  }

  showError() {
    this.toastr.error('Error: Please send a valid email.');
  }
}
