import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DossierListComponent } from './dossier-list/dossier-list.component';

// @ts-ignore
import { DossierDetailComponent } from "./dossier-detail/dossier-detail.component";
import { DossierFormComponent } from './dossier-form/dossier-form.component';

@NgModule({
  declarations: [
    DossierDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: '', component: DossierListComponent},
      {path: 'new', component: DossierFormComponent},
      {path: 'edit/:id', component: DossierFormComponent},
      {path: ':id', component: DossierDetailComponent}
    ]),
    DossierListComponent,
    DossierFormComponent
  ]
})
export class DossierJuridiqueModule { }
