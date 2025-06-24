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
          <img class="brand-logo" src="/assets/logo.png" alt="logo" aria-hidden="true" />
      </a>
      <nav>
        <a [routerLink]="['/']">
          <p>Members</p>
        </a>
        <a [routerLink]="['/new-user']">
          <img class="add-user-btn" src="/assets/add-user.svg" alt="logo" aria-hidden="true" />
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