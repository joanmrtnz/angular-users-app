import { Component, input } from '@angular/core';
import {UserInfo} from '../user';
import {RouterLink,RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-user',
  imports: [RouterLink, RouterOutlet],
 template: `
    <section class="listing">
      <div class="listing-user">
      <p class="listing-data"><span>{{ user().name }} {{ user().surname }}</span> ({{ user().email }})</p>
      <a [routerLink]="['/details', user().id]">Details</a>
      </div>
    </section>
  `,
  styleUrl: './user.css'
})
export class User {
  user = input.required<UserInfo>();
}
