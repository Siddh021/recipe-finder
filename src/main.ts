import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', loadComponent: () => import('./app/components/home/home.component').then(m => m.HomeComponent) },
      { path: 'recipes', loadComponent: () => import('./app/components/recipes/recipes.component').then(m => m.RecipesComponent) },
      { path: '**', redirectTo: '/home' }
    ])
  ]
}).catch(err => console.error(err));