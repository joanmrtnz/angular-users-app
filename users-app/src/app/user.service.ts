import { Injectable } from '@angular/core';
import { UserInfo } from './user';
import { PaginatedResponse } from './paginated-response';
import { unparse } from 'papaparse';
import { saveAs }  from 'file-saver';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = 'http://localhost:3000/users';

  async getAllUsers(page: number | null): Promise<PaginatedResponse<UserInfo>> {
    const response = await fetch(`${this.url}?_page=${page}`);
    const data = await response.json();
    return (data) ?? [];
  }

  async getUserById(id: string): Promise<UserInfo | undefined> {
    const data = await fetch(`${this.url}?id=${id}`);
    const userJson = await data.json();
    return userJson[0] ?? {};
  }

  exportCsv(data: any[]) {
    const csv = unparse(data, {
      quotes: false,         
      delimiter: ',',        
      header: true,          
    });
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'data.csv'); 
  }

  exportPdf(data: any[]) {
    const doc = new jsPDF();
    const columns = Object.keys(data[0]);
    const rows = data.map(row => columns.map(col => row[col]));

  autoTable(doc, {
    head: [columns],
    body: rows,
    columnStyles: {
      0: { cellWidth: 'wrap'  },
      1: { cellWidth: 30 },
      2: { cellWidth: 'wrap' },
      3: {cellWidth: 30}
    },
    styles: {
      overflow: 'linebreak',
      cellPadding: 2,
      fontSize: 10,
    },
    headStyles: {
    fontStyle: 'bold',
    fillColor: [230, 230, 230],
    textColor: 20,
    halign: 'center',
    valign: 'middle'
  }
  });

    doc.save('users.pdf');
  }

  async submitApplication(
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    imageUrl: string
  ) {
    const bodyData = { name: firstName, surname: lastName, email, id , imageUrl};

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
