import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { DocumentAssocie } from '../models/document-associe.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentAssocieService {
  private apiUrl = `${environment.apiUrl}/documents`;

  constructor(private http: HttpClient) { }

  getAllDocuments(): Observable<DocumentAssocie[]> {
    return this.http.get<DocumentAssocie[]>(this.apiUrl);
  }

  getDocumentById(id: number): Observable<DocumentAssocie> {
    return this.http.get<DocumentAssocie>(`${this.apiUrl}/${id}`);
  }

  createDocument(document: DocumentAssocie): Observable<DocumentAssocie> {
    return this.http.post<DocumentAssocie>(this.apiUrl, document);
  }

  updateDocument(id: number, document: DocumentAssocie): Observable<DocumentAssocie> {
    return this.http.put<DocumentAssocie>(`${this.apiUrl}/${id}`, document);
  }

  deleteDocument(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  uploadDocument(file: File, nomDocument: string, description: string, idMesure?: number): Observable<DocumentAssocie> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('nomDocument', nomDocument);
    formData.append('description', description);
    
    if (idMesure) {
      formData.append('idMesure', idMesure.toString());
    }
    
    return this.http.post<DocumentAssocie>(`${this.apiUrl}/upload`, formData);
  }

  getDocumentsByDossier(referenceDossier: string): Observable<DocumentAssocie[]> {
    return this.http.get<DocumentAssocie[]>(`${this.apiUrl}/dossier/${referenceDossier}`);
  }

  downloadDocument(id: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/download/${id}`, { responseType: 'blob' });
  }
}