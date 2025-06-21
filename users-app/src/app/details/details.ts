import {Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../user.service';
import {UserInfo} from '../user';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-details',
  imports: [ReactiveFormsModule],
  template: `
    <article>
      <section class="listing-description">
        <h2 class="listing-heading">{{ user?.name }}</h2>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this user</h2>
        <ul>
          <li>Full Name: {{ user?.surname }} {{ user?.surname }}</li>
          <li>Email:  {{ user?.email }}</li>
          <li>DNI: {{ user?.id }}</li>
        </ul>
      </section>
    </article>
  `,
  styleUrls: ['./details.css'],
})
export class Details {
  route: ActivatedRoute = inject(ActivatedRoute);
  userService = inject(UserService);
  user: UserInfo | undefined;

  constructor() {
    const userId = this.route.snapshot.params['id'];

      this.userService
    .getUserById(userId)
    .then((user: UserInfo | undefined) => {
      this.user = user;
    });
  }

  // Form object
  applyForm = new FormGroup({
    id: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  
  submitApplication() {
    this.userService.submitApplication(
      this.applyForm.value.id ?? '',
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    );
  }
}