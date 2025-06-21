import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule],
  template: `
  <article>
    <section class="user-apply">
      <h2 class="section-heading">Register New User</h2>
      <form [formGroup]="registerForm" (submit)="submitApplication()">
        <label for="first-name">First Name</label>
        <input id="first-name" type="text" formControlName="firstName" />
        <label for="last-name">Last Name</label>
        <input id="last-name" type="text" formControlName="lastName" />
        <label for="email">Email</label>
        <input id="email" type="email" formControlName="email" />
        <label for="id">DNI</label>
        <input id="id" type="text" formControlName="id" />
        <button type="submit" class="primary">Apply now</button>
      </form>
    </section>
  </article>
  `
  ,
  styleUrl: './user-form.css'
})
export class UserForm {
  userService = inject(UserService);

  // Form object
  registerForm = new FormGroup({
    id: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  
  submitApplication() {
    this.userService.submitApplication(
      this.registerForm.value.id ?? '',
      this.registerForm.value.firstName ?? '',
      this.registerForm.value.lastName ?? '',
      this.registerForm.value.email ?? '',
    );
  }
}
