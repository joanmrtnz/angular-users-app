import {Component} from '@angular/core';
import {Home} from './home/home';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Home, RouterModule],
  template: `
    <main>
      
      <header>
      <a [routerLink]="['/']">
          <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
      </a>
      <nav>
        <a [routerLink]="['/']">
          <p>Users List</p>
        </a>
        <a [routerLink]="['/new-user']">
          <p>New User</p>
        </a>
        
      </nav>  
      </header>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.css'],
})
export class App {
  title = 'homes';
}