import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './contact-form.component.html'
})
export class ContactFormComponent {

  contactForm;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.contactForm.valid) {
      this.http
        .get('https://jsonplaceholder.typicode.com/posts')
        .subscribe(response => {
          console.log('HTTP Response:', response);
        });
    }
  }
}