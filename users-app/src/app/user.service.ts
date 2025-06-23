import { Injectable } from '@angular/core';
import { UserInfo } from './user';
import { PaginatedResponse } from './paginated-response';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = 'http://localhost:3000/users';

  async getAllUsers(page: number | null): Promise<PaginatedResponse<UserInfo>> {
    const response = await fetch(`${this.url}?_page=${page}`);
    const data = await response.json();
    console.log(data);
    return (data) ?? [];
  }

  async getUserById(id: string): Promise<UserInfo | undefined> {
    const data = await fetch(`${this.url}?id=${id}`);
    const userJson = await data.json();
    return userJson[0] ?? {};
  }

  async submitApplication(
    id: string,
    firstName: string,
    lastName: string,
    email: string
  ) {
    const bodyData = { name: firstName, surname: lastName, email, id };

    try {
      const response = await fetch(`${this.url}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bodyData),
      });

      if (response.ok) {
        const result = await response.json();
        alert('Usuario guardado correctamente.');
      } else {
        alert(`Error al guardar: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error de red:', error);
      alert('No se pudo conectar con el servidor.');
    }
  }
}
