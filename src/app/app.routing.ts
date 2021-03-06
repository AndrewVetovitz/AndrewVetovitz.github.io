import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

const websiteRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(websiteRoutes);
