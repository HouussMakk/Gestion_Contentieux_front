import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // si tu as défini un fichier de routes

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes) // ✅ Fournit le routeur
  ]
});
