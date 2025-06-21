import { Component, inject } from '@angular/core';
import {User} from '../user/user';
import {UserInfo} from '../user';
import {UserService} from '../user.service';

@Component({
  selector: 'app-home',
  imports: [User],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Search Users" #filter />
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      @for(user of filteredUserList; track $index) {
        <app-user [user]="user"></app-user>
      }
    </section>
  `,
  styleUrl: './home.css'
})

export class Home {
  userList: UserInfo[] = [];
  filteredUserList: UserInfo[] = [];
  userService: UserService = inject(UserService);

  constructor() {
    this.userService
    .getAllUsers()
    .then((userList: UserInfo[]) => {
      this.userList = userList;
      this.filteredUserList = userList;
    });
    
  }

  filterResults(text: string) {

    // Clean filtered array
    if (!text) {
      this.filteredUserList = this.userList;
      return;
    }
    this.filteredUserList = this.userList.filter((user) =>
      user?.name.toLowerCase().includes(text.toLowerCase()) ||
      user?.surname.toLowerCase().includes(text.toLowerCase()) ||
      user?.email.toLowerCase().includes(text.toLowerCase()) ||
      user?.id.toLowerCase().includes(text.toLowerCase()),
    );
  }
}

