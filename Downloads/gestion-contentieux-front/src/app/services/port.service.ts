import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Port } from '../models/port.model';

@Injectable({
  providedIn: 'root'
})
export class PortService {
  private apiUrl = `${environment.apiUrl}/ports`;

  constructor(private http: HttpClient) { }

  getAllPorts(): Observable<Port[]> {
    return this.http.get<Port[]>(this.apiUrl);
  }

  getPortByCode(code: string): Observable<Port> {
    return this.http.get<Port>(`${this.apiUrl}/${code}`);
  }

  createPort(port: Port): Observable<Port> {
    return this.http.post<Port>(this.apiUrl, port);
  }

  updatePort(code: string, port: Port): Observable<Port> {
    return this.http.put<Port>(`${this.apiUrl}/${code}`, port);
  }

  deletePort(code: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${code}`);
  }
}