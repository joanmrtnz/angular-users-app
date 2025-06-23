import { Component, inject } from '@angular/core';
import {User} from '../user/user';
import {UserInfo} from '../user';
import {UserService} from '../user.service';

@Component({
  selector: 'app-home',
  imports: [User],
  template: `
    <section class="list-heading">
      <h1>Users List</h1>
      <form>
        <div class="search-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg"
              class="search-icon"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input type="text" placeholder="Search Users" #filter />
          <button type="button" (click)="filterResults(filter.value)">Search</button>
        </div>
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

