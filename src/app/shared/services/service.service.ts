import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(`${env.api}`);
  }
  getDataa() {
    return this.http.get(`${env.api}`);
  }
  getItemData(id: string) {
    return this.http.get(`${env.api}/${id}`);
  }

  itemsIncart(numItems: []) {
    return numItems.length;
  }
}
