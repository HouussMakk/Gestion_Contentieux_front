import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// @ts-ignore
import { DossierService } from '../../services/dossier.service';

@Component({
  selector: 'app-dossier-form',
  templateUrl: './dossier-form.component.html',
  imports: [
    ReactiveFormsModule
  ],
  styleUrls: ['./dossier-form.component.scss']
})
export class DossierFormComponent implements OnInit {
  dossierForm: FormGroup;
  isEditMode = false;
  dossierReference: string | null = null;
  loading = false;
  submitting = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private dossierService: DossierService
  ) {
    this.dossierForm = this.fb.group({
      referenceDossier: ['', Validators.required],
      qualiteAgence: ['', Validators.required],
      natureLitige: ['', Validators.required],
      objetLitige: ['', Validators.required],
      instanceJudiciaire: ['', Validators.required],
      codePort: [''],
      partieAdverseId: [null],
      stadeLitigeId: [null],
      avocatId: [null]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const dossierRef = params.get('id');
      if (dossierRef) {
        this.isEditMode = true;
        this.dossierReference = dossierRef;
        this.loadDossierData(dossierRef);
      } else {
        // Generate a new reference number for new dossiers
        const today = new Date();
        const refPrefix = `REF-${today.getFullYear()}-`;
        this.dossierForm.patchValue({
          referenceDossier: refPrefix + Math.floor(1000 + Math.random() * 9000)
        });
      }
    });
  }

  loadDossierData(reference: string): void {
    this.loading = true;
    this.dossierService.getDossierByReference(reference).subscribe(
        (dossier: { [key: string]: any; }) => {
        this.dossierForm.patchValue(dossier);
        this.loading = false;
      },
        (error: any) => {
        console.error('Erreur lors du chargement du dossier:', error);
        this.loading = false;
        alert('Erreur lors du chargement du dossier');
        this.router.navigate(['/dossier-juridique']);
      }
    );
  }

  onSubmit(): void {
    if (this.dossierForm.invalid) {
      // Mark all fields as touched to trigger validation messages
      Object.keys(this.dossierForm.controls).forEach(key => {
        const control = this.dossierForm.get(key);
        control?.markAsTouched();
      });
      return;
    }

    this.submitting = true;
    const dossierData = this.dossierForm.value;

    if (this.isEditMode && this.dossierReference) {
      this.dossierService.updateDossier(this.dossierReference, dossierData).subscribe(
        () => {
          this.submitting = false;
          this.router.navigate(['/dossier-juridique']);
        },
          (error: any) => {
          console.error('Erreur lors de la mise à jour:', error);
          this.submitting = false;
          alert('Erreur lors de la mise à jour du dossier');
        }
      );
    } else {
      this.dossierService.createDossier(dossierData).subscribe(
        () => {
          this.submitting = false;
          this.router.navigate(['/dossier-juridique']);
        },
          (error: any) => {
          console.error('Erreur lors de la création:', error);
          this.submitting = false;
          alert('Erreur lors de la création du dossier');
        }
      );
    }
  }

  cancel(): void {
    this.router.navigate(['/dossier-juridique']);
  }
}
