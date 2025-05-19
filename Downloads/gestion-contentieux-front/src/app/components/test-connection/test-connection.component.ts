import { Component, OnInit } from '@angular/core';
import { DossierJuridiqueService } from '../../services/dossier-juridique.service';
import { DossierJuridique } from '../../models/dossier-juridique.model';

@Component({
  selector: 'app-test-connection',
  templateUrl: './test-connection.component.html',
  styleUrls: ['./test-connection.component.scss']
})
export class TestConnectionComponent implements OnInit {
  // Initialize with default values
  dossiers: DossierJuridique[] = [];
  loading = true;
  error: string | null = null;

  constructor(private dossierService: DossierJuridiqueService) { }

  ngOnInit(): void {
    this.testConnection();
  }

  testConnection(): void {
    this.loading = true;
    this.error = null;
    
    this.dossierService.getAllDossiers().subscribe({
      next: (data) => {
        this.dossiers = data || [];
        this.loading = false;
        console.log('Data received:', this.dossiers);
      },
      error: (err) => {
        console.error('Error connecting to the API:', err);
        this.error = `Failed to connect to the API: ${err.message || 'Unknown error'}`;
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
}