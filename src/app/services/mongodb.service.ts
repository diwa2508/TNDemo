/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MongodbService {

  constructor() { }
}*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { hospitals } from '../models/hospital.model';

const baseUrl = 'https://democovidmongoserver.herokuapp.com/showHospitals';

@Injectable({
  providedIn: 'root'
})
export class MongodbService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<hospitals[]> {
    //console.log(Observable<hospitals[]>);
    return this.http.get<hospitals[]>(baseUrl);
  }

  getAllHospitals() {
    return this.http.get(baseUrl);
  }

  get(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title): Observable<any> {
    return this.http.get(`${baseUrl}?title=${title}`);
  }

  findByDistrict(District): Observable<any> {
    return this.http.get(`${baseUrl}?title=${District}`);
  }
}