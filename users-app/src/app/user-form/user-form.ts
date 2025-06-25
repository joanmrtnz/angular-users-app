import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {UserService} from '../user.service';
import {RouterLink} from '@angular/router';


@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule, RouterLink],
  template: `
  <section class="content">
      <div class="form-card">
        <div class="form-container">
          <div>
          <div class="form-titles">
            <h2 class="form-heading">Add New Member</h2>
            <p class="form-subheading">Fill in the following fields</p>
          </div>
            <form class="form-info" [formGroup]="registerForm" (submit)="submitApplication()">
              <label for="first-name">First Name</label>
              <input id="first-name" type="text" formControlName="firstName" />
              <label for="last-name">Last Name</label>
              <input id="last-name" type="text" formControlName="lastName" />
              <label for="email">Email</label>
              <input id="email" type="email" formControlName="email" />
              <label for="id">DNI</label>
              <input id="id" type="text" formControlName="id" />
              <label for="id">IMAGE URL (Optional)</label>
              <input id="imageUrl" type="text" formControlName="imageUrl" />
              <button type="submit" class="submit-btn">Submit</button>
            </form>
            <div>
              <a [routerLink]="['/']" class="back-btn" >Back</a>
            </div>
          </div>
        </div>
    </div>
  </section>
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
    imageUrl: new FormControl(''),
  });

  
  submitApplication() {
    this.userService.submitApplication(
      this.registerForm.value.id ?? '',
      this.registerForm.value.firstName ?? '',
      this.registerForm.value.lastName ?? '',
      this.registerForm.value.email ?? '',
      this.registerForm.value.imageUrl ?? '',
    );

    this.registerForm.reset();

  }
}
