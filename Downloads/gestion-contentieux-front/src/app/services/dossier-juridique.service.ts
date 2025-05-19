import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { DossierJuridique } from '../models/dossier-juridique.model';

@Injectable({
  providedIn: 'root'
})
export class DossierJuridiqueService {
  private apiUrl = `${environment.apiUrl}/dossiers`;

  constructor(private http: HttpClient) { }

  getAllDossiers(): Observable<DossierJuridique[]> {
    return this.http.get<DossierJuridique[]>(this.apiUrl);
  }

  getDossierByReference(reference: string): Observable<DossierJuridique> {
    return this.http.get<DossierJuridique>(`${this.apiUrl}/${reference}`);
  }

  createDossier(dossier: DossierJuridique): Observable<DossierJuridique> {
    return this.http.post<DossierJuridique>(this.apiUrl, dossier);
  }

  updateDossier(reference: string, dossier: DossierJuridique): Observable<DossierJuridique> {
    return this.http.put<DossierJuridique>(`${this.apiUrl}/${reference}`, dossier);
  }

  deleteDossier(reference: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${reference}`);
  }

  getDossiersByNatureLitige(natureLitige: string): Observable<DossierJuridique[]> {
    return this.http.get<DossierJuridique[]>(`${this.apiUrl}/nature/${natureLitige}`);
  }

  getDossiersByInstanceJudiciaire(instanceJudiciaire: string): Observable<DossierJuridique[]> {
    return this.http.get<DossierJuridique[]>(`${this.apiUrl}/instance/${instanceJudiciaire}`);
  }
}
