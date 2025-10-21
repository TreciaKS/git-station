import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/landing/landing.component').then(
        (m) => m.LandingComponent
      ),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/user-dashboard/user-dashboard.component').then(
        (m) => m.UserDashboardComponent
      ),
  },
  {
    path: 'starter-finder',
    loadComponent: () =>
      import('./features/starter-finder/starter-finder.component').then(
        (m) => m.StarterFinderComponent
      ),
  },
  {
    path: 'readme',
    loadComponent: () =>
      import('./features/readme-generator/readme-generator.component').then(
        (m) => m.ReadmeGeneratorComponent
      ),
  },
  { path: '**', redirectTo: '' },
];