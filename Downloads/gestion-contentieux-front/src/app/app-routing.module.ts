import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestConnectionComponent } from './components/test-connection/test-connection.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DossierListComponent } from './components/dossier-juridique/dossier-list/dossier-list.component';
import { DossierFormComponent } from './components/dossier-juridique/dossier-form/dossier-form.component';
// @ts-ignore
import { DossierDetailComponent } from './components/dossier-juridique/dossier-detail/dossier-detail.component';
import { MesureListComponent } from './components/mesure-tribunal/mesure-list/mesure-list.component';
import { MesureFormComponent } from './components/mesure-tribunal/mesure-form/mesure-form.component';
import { MesureDetailComponent } from './components/mesure-tribunal/mesure-detail/mesure-detail.component';
import { DocumentListComponent } from './components/document/document-list/document-list.component';
import { DocumentUploadComponent } from './components/document/document-upload/document-upload.component';
import { DocumentDetailComponent } from './components/document/document-detail/document-detail.component';
import { AvocatListComponent } from './components/reference-data/avocat-list/avocat-list.component';
import { PortListComponent } from './components/reference-data/port-list/port-list.component';
import { StadeLitigeListComponent } from './components/reference-data/stade-litige-list/stade-litige-list.component';
import { PartieAdverseListComponent } from './components/reference-data/partie-adverse-list/partie-adverse-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'test-connection', component: TestConnectionComponent },
  // Add more routes here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
const routess: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },

    // Dossier Juridique routes
    { path: 'dossiers', component: DossierListComponent },
    { path: 'dossiers/new', component: DossierFormComponent },
    { path: 'dossiers/:reference', component: DossierDetailComponent },
    { path: 'dossiers/:reference/edit', component: DossierFormComponent },

    // Mesure Tribunal routes
    { path: 'mesures', component: MesureListComponent },
    { path: 'mesures/new', component: MesureFormComponent },
    { path: 'mesures/:id', component: MesureDetailComponent },
    { path: 'mesures/:id/edit', component: MesureFormComponent },

    // Document routes
    { path: 'documents', component: DocumentListComponent },
    { path: 'documents/upload', component: DocumentUploadComponent },
    { path: 'documents/:id', component: DocumentDetailComponent },

    // Reference data routes
    { path: 'avocats', component: AvocatListComponent },
    { path: 'parties-adverses', component: PartieAdverseListComponent },
    { path: 'ports', component: PortListComponent },
    { path: 'stades-litige', component: StadeLitigeListComponent },

    // Test connection route
    { path: 'test-connection', component: TestConnectionComponent },

    // Wildcard route for 404
    { path: '**', redirectTo: '/dashboard' }
  ];
