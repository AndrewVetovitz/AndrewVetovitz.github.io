import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { WorkComponent } from './components/work/work.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { AppComponent } from './app.component';

const websiteRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(websiteRoutes);
