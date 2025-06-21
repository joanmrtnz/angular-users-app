import { Component, input } from '@angular/core';
import {UserInfo} from '../user';
import {RouterLink,RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-user',
  imports: [RouterLink, RouterOutlet],
 template: `
    <section class="listing">
      <h2 class="listing-heading">{{ user().name }}</h2>
      <p class="listing-location">{{ user().surname }}, {{ user().email }}</p>
      <a [routerLink]="['/details', user().id]">Details</a>
    </section>
  `,
  styleUrl: './user.css'
})
export class User {
  user = input.required<UserInfo>();
}
