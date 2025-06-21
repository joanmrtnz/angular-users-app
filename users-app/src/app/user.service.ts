import { Injectable } from '@angular/core';
import {UserInfo} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    

  url = 'http://localhost:3000/users';

  async getAllUsers(): Promise<UserInfo[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

 async getUserById(id: string): Promise<UserInfo | undefined> {
    const data = await fetch(`${this.url}?id=${id}`);
    const userJson = await data.json();
    return userJson[0] ?? {};
  }

  submitApplication(id: string, firstName: string, lastName: string, email: string) {
     console.log(id, firstName, lastName, email);
  }

}
