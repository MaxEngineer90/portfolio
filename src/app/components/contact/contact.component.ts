import { Component } from '@angular/core';
import { MatCard, MatCardHeader } from '@angular/material/card';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { NgIf } from '@angular/common';
import {
  BreakpointComponent,
  BreakpointEnum,
} from '../utils/breakpoint/breakpoint.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    MatLabel,
    MatCard,
    MatButton,
    ReactiveFormsModule,
    MatError,
    MatFormField,
    MatInput,
    NgIf,
    MatCardHeader,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent extends BreakpointComponent {
  override currentBreakpoint?: BreakpointEnum;
  protected readonly breakpointEnum = BreakpointEnum;

  constructor() {
    super();
  }

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(15),
    ]),
  });

  onSubmit() {
    console.log(this.contactForm.value);
  }
}
