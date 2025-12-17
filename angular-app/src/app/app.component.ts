import { Component } from '@angular/core';
import { ContactFormComponent } from './contact-form/contact-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContactFormComponent],
  template: `<app-contact-form></app-contact-form>`
})
export class AppComponent {}
