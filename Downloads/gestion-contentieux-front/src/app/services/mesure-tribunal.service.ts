import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { MesureTribunal } from '../models/mesure-tribunal.model';

@Injectable({
  providedIn: 'root'
})
export class MesureTribunalService {
  private apiUrl = `${environment.apiUrl}/mesure`;

  constructor(private http: HttpClient) { }

  getAllMesures(): Observable<MesureTribunal[]> {
    return this.http.get<MesureTribunal[]>(this.apiUrl);
  }

  getMesureById(id: number): Observable<MesureTribunal> {
    return this.http.get<MesureTribunal>(`${this.apiUrl}/${id}`);
  }

  createMesure(mesure: MesureTribunal): Observable<MesureTribunal> {
    return this.http.post<MesureTribunal>(this.apiUrl, mesure);
  }

  updateMesure(id: number, mesure: MesureTribunal): Observable<MesureTribunal> {
    return this.http.put<MesureTribunal>(`${this.apiUrl}/${id}`, mesure);
  }

  deleteMesure(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getMesuresByType(typeMesure: string): Observable<MesureTribunal[]> {
    return this.http.get<MesureTribunal[]>(`${this.apiUrl}/type/${typeMesure}`);
  }

  getMesuresByDossier(referenceDossier: string): Observable<MesureTribunal[]> {
    return this.http.get<MesureTribunal[]>(`${this.apiUrl}/dossier/${referenceDossier}`);
  }

  getMesuresByDate(date: string): Observable<MesureTribunal[]> {
    return this.http.get<MesureTribunal[]>(`${this.apiUrl}/date/${date}`);
  }
}