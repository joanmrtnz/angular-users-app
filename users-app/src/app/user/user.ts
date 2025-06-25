import { Component, input } from '@angular/core';
import {UserInfo} from '../user';
import {RouterLink,RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-user',
  imports: [RouterLink, RouterOutlet],
 template: `
    <section class="listing">
      <div class="listing-user">
        <div class="listing-data">
          <img [src]="user().imageUrl || '/assets/user.svg'" alt="Foto de {{ user().name }}" />
          <p class="listing-data-text">
            <span class="user-name">
              {{ user().name }} {{ user().surname }}
            </span>
            <span class="user-email">
              ({{ user().email }})
            </span>
          </p>
        </div>
        <a [routerLink]="['/details', user().id]">Details</a>
      </div>
    </section>
  `,
  styleUrl: './user.css'
})
export class User {
  user = input.required<UserInfo>();
}
