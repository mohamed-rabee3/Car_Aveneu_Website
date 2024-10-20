import { Component } from '@angular/core';
import { NavbarComponent } from '../../Components/navbar/navbar.component';
import { FooterComponent } from '../../Components/footer/footer.component';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent,ButtonModule,AccordionModule,FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  name: string = '';
  email: string = '';
  message: string = '';


  tabs = [
    { title: 'What is the rental’s mileage plan?', content: 'Our standard mileage plan offers unlimited miles for most rentals, allowing you to enjoy your drive without worrying about extra charges. For specific vehicle categories, a mileage limit may apply, so please check the rental terms for details.' },
    { title: 'What are your extra insurance options?', content: 'We offer a variety of optional insurance products for added peace of mind. These include Collision Damage Waiver, Personal Accident Insurance, and Theft Protection. Our team can help you select the best coverage based on your needs.' },
    { title: 'Do I need to return the rental with a full tank?', content: 'Yes, we ask that all rental vehicles be returned with a full tank of gas to avoid refueling charges. Upon pickup, you will receive the car with a full tank, and we encourage you to do the same when returning it.' }
];


  onSubmit() {
    console.log('Name:  ', this.name);
    console.log('Email:  ', this.email);
    console.log('Message:  ', this.message);
}
}
