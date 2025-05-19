import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { PartieAdverse } from '../models/partie-adverse.model';

@Injectable({
  providedIn: 'root'
})
export class PartieAdverseService {
  private apiUrl = `${environment.apiUrl}/partiesadverses`;

  constructor(private http: HttpClient) { }

  getAllPartiesAdverses(): Observable<PartieAdverse[]> {
    return this.http.get<PartieAdverse[]>(this.apiUrl);
  }

  getPartieAdverseById(id: string): Observable<PartieAdverse> {
    return this.http.get<PartieAdverse>(`${this.apiUrl}/${id}`);
  }

  createPartieAdverse(partieAdverse: PartieAdverse): Observable<PartieAdverse> {
    return this.http.post<PartieAdverse>(this.apiUrl, partieAdverse);
  }

  updatePartieAdverse(id: string, partieAdverse: PartieAdverse): Observable<PartieAdverse> {
    return this.http.put<PartieAdverse>(`${this.apiUrl}/${id}`, partieAdverse);
  }

  deletePartieAdverse(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}