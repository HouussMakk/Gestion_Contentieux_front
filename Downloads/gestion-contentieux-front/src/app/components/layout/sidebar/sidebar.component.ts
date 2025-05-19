import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  imports: [
    RouterLink
  ],
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  menuItems = [
    { title: 'Dashboard', icon: 'dashboard', route: '/dashboard', active: false },
    { title: 'Dossier Juridique', icon: 'folder', route: '/dossier-juridique', active: true },
    { title: 'Mesure Tribunal', icon: 'gavel', route: '/mesure-tribunal', active: false },
    { title: 'Documents', icon: 'description', route: '/document', active: false }
  ];
}
