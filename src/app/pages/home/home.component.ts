import { Component } from '@angular/core';
import { NavbarComponent } from '../../Components/navbar/navbar.component';
import { FooterComponent } from '../../Components/footer/footer.component';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent,ButtonModule,AccordionModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  onSubmit() {
    console.log('Name:  ', this.name);
    console.log('Email:  ', this.email);
    console.log('Message:  ', this.message);
}
}
