import {Component, OnInit} from '@angular/core';
import {Contact} from './contact-class';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {InitialPipe} from './initials';

@Component({selector: 'app-contact-us', templateUrl: './contact-us.component.html', styleUrls: ['./contact-us.component.css']})

export class ContactUsComponent implements OnInit {
  contact : Contact;
  contactForm : FormGroup;
  emailRegex : any = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
  constructor(private fb : FormBuilder) {}

  ngOnInit() {
    debugger;
    this.contact = new Contact("Rajeev", "rajeev.inform@gmail.com", "Hey, I have a suggestion", " ");
    this.buildForm();
  }

  buildForm() : void {
    this.contactForm = this
      .fb
      .group({
        'name': [
          this.contact.name,
          [
            Validators.required, Validators.minLength(4),
            Validators.maxLength(24),
            // forbiddenNameValidator(/bob/i)
          ]
        ],
        'email': [
          this.contact.email,
          [Validators.required, Validators.email]
        ],
        'subject': [
          this.contact.subject,
          [Validators.required]
        ]
      });

    this
      .contactForm
      .valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }

  onValueChanged(data?: any) {
    if (!this.contactForm) {
      return;
    }
    const form = this.contactForm;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }
  formErrors = {
    'name': '',
    'email': '',
    'subject': ''
  };

  validationMessages = {
    'name': {
      'required': 'Name is required.',
      'minlength': 'Name must be at least 4 characters long.',
      'maxlength': 'Name cannot be more than 24 characters long.'
    },
    'email': {
      'required': 'Email is required.',
      'email': 'Email is not Correct'
    },
    'subject': {
      'required': 'Subject is required.'
    }
  };

}
