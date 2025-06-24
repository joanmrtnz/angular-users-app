import {Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../user.service';
import {UserInfo} from '../user';
import {RouterLink} from '@angular/router';


@Component({
  selector: 'app-details',
  imports: [RouterLink],
  template: `  
    <section class="content">
      <div class="details-card">
        <div class="details-container">
          <div class="details-photo">
            <img
              [src]="user?.imageUrl || '/assets/user.svg'"
              alt="Foto de {{ user?.name }}"
            />
          </div>
          <div>
            <h1 class="listing-heading">
              {{ user?.name }} {{ user?.surname }}
            </h1>

            <p class="listing-mail">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="var(--zinc-400)" heigth="20" width="20" class="mail-icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              {{ user?.email }}
            </p>

            <p class="listing-features">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"  stroke="var(--zinc-400)" heigth="20" width="20" class="id-icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
              </svg>
              {{ user?.id }}
            </p>

            <a [routerLink]="['/']" class="back-btn" >Back</a>
          </div>
        </div>
      </div>
    </section>
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
}