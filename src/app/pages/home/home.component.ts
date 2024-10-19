import { Component } from '@angular/core';
import { NavbarComponent } from '../../Components/navbar/navbar.component';
import { FooterComponent } from '../../Components/footer/footer.component';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { EmailValidator, FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent,ButtonModule,AccordionModule,FormsModule,InputTextModule,InputTextareaModule,FloatLabelModule],
  templateUrl: './home.component.html' ,
  styleUrl: './home.component.css',
})
export class HomeComponent {
  
  email: EmailValidator | undefined;
  number: string | undefined;
  text: string | undefined;

}
