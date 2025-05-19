import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { StadeLitige } from '../models/stade-litige.model';

@Injectable({
  providedIn: 'root'
})
export class StadeLitigeService {
  private apiUrl = `${environment.apiUrl}/stadeslitige`;

  constructor(private http: HttpClient) { }

  getAllStadesLitige(): Observable<StadeLitige[]> {
    return this.http.get<StadeLitige[]>(this.apiUrl);
  }

  getStadeLitigeById(id: number): Observable<StadeLitige> {
    return this.http.get<StadeLitige>(`${this.apiUrl}/${id}`);
  }

  createStadeLitige(stadeLitige: StadeLitige): Observable<StadeLitige> {
    return this.http.post<StadeLitige>(this.apiUrl, stadeLitige);
  }

  updateStadeLitige(id: number, stadeLitige: StadeLitige): Observable<StadeLitige> {
    return this.http.put<StadeLitige>(`${this.apiUrl}/${id}`, stadeLitige);
  }

  deleteStadeLitige(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}