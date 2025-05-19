import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { DossierService } from '../../services/.service';
import {RouterLink} from '@angular/router';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-dossier-list',
  templateUrl: './dossier-list.component.html',
  imports: [
    RouterLink,
    NgClass
  ],
  styleUrls: ['./dossier-list.component.scss']
})
export class DossierListComponent implements OnInit {
  dossiers: any[] = [];
  loading = true;
  error: string | null = null;

  constructor(private dossierService: DossierService) { }

  ngOnInit(): void {
    this.loadDossiers();
  }

  loadDossiers(): void {
    this.dossierService.getAllDossiers().subscribe(
        (data: any[]) => {
        this.dossiers = data;
        this.loading = false;
      },
        (error: any) => {
        this.error = 'Erreur lors du chargement des dossiers';
        this.loading = false;
        console.error(error);
      }
    );
  }

  deleteDossier(reference: string): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce dossier?')) {
      this.dossierService.deleteDossier(reference).subscribe(
        () => {
          this.dossiers = this.dossiers.filter(d => d.referenceDossier !== reference);
        },
          (error: any) => {
          console.error('Erreur lors de la suppression:', error);
          alert('Erreur lors de la suppression du dossier');
        }
      );
    }
  }
}
