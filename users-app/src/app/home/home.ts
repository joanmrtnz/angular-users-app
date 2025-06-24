import { Component, inject } from '@angular/core';
import {User} from '../user/user';
import {UserInfo} from '../user';
import {PaginatedResponse} from '../paginated-response';
import {UserService} from '../user.service';

@Component({
  selector: 'app-home',
  imports: [User],
  template: `
    <section class="content">
      <section class="list-heading">
        <h1>{{ numUsers }} Members</h1>
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

        
        <div class="export-container" (click)="toggleExportMenu()">
          <img class="download-icon"
              src="/assets/download.svg"
              alt="export"
              aria-hidden="true" />

          @if (showExportMenu) {
            <div class="export-menu">
              <button type="button" (click)="onDownloadCsv()">CSV</button>
              <button type="button" (click)="onDownloadPdf()">PDF</button>
            </div>
          }
        </div> 


        <div (click)="orderResults(orderAZ)">
          <img class="sort-icon" [src]="orderAZ ? '/assets/sort.svg' : '/assets/sort-inverse.svg'" alt="sort" aria-hidden="true" />
        </div>

      </section>
      <section class="results">
        @for(user of filteredUserList; track $index) {
          <app-user [user]="user"></app-user>
        }
      </section>
      <section>
        <div class="pagination-btns">
          <button type="button"  [disabled]="prev == null" (click)="getAllUsers(this.prev)">Previous</button>
          <button type="button"  [disabled]="next == null" (click)="getAllUsers(this.next)">Next</button>
        </div>
      </section>
    </section>
  `,
  styleUrl: './home.css'
})

export class Home {
  orderAZ: boolean = true;
  userList: UserInfo[] = [];
  filteredUserList: UserInfo[] = [];
  first!: number;
  prev!: number | null;
  next!: number | null;
  last!: number;
  pages!: number;
  userService: UserService = inject(UserService);
  showExportMenu : boolean = false;
  numUsers : number = 0;

  constructor() {
   this.getAllUsers(1);
  }

  getAllUsers(page: number | null){
     this.userService
    .getAllUsers(page)
   .then((resp: PaginatedResponse<UserInfo>) => {
        this.userList = resp.data;
        this.filteredUserList = resp.data;
        this.first = resp.first;
        this.prev  = resp.prev;
        this.next  = resp.next;
        this.last  = resp.last;
        this.pages = resp.pages;
        this.numUsers = resp.items;
      })
      .catch(err => {
        console.error('Error cargando usuarios:', err);
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

  orderResults(orderAZ: boolean){
    this.filteredUserList = this.filteredUserList.sort((a, b) => orderAZ ? a.name.localeCompare(b.name) :  b.name.localeCompare(a.name));
    this.orderAZ = !orderAZ;
  }

  onDownloadCsv(){
    this.userService.exportCsv(this.filteredUserList)
    console.log("Descargando csv...");
    this.showExportMenu = false;
  }

  onDownloadPdf(){
    this.userService.exportPdf(this.filteredUserList)
    console.log("Descargando pdf...");
    this.showExportMenu = false;
  } 

  toggleExportMenu() {
    this.showExportMenu = !this.showExportMenu;
  }

}

