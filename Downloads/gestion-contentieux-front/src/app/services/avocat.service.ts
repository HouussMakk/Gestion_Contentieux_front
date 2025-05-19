import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Avocat } from '../models/avocat.model';

@Injectable({
  providedIn: 'root'
})
export class AvocatService {
  private apiUrl = `${environment.apiUrl}/avocats`;

  constructor(private http: HttpClient) { }

  getAllAvocats(): Observable<Avocat[]> {
    return this.http.get<Avocat[]>(this.apiUrl);
  }

  getAvocatById(id: number): Observable<Avocat> {
    return this.http.get<Avocat>(`${this.apiUrl}/${id}`);
  }

  createAvocat(avocat: Avocat): Observable<Avocat> {
    return this.http.post<Avocat>(this.apiUrl, avocat);
  }

  updateAvocat(id: number, avocat: Avocat): Observable<Avocat> {
    return this.http.put<Avocat>(`${this.apiUrl}/${id}`, avocat);
  }

  deleteAvocat(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}