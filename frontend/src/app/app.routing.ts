import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { WorkComponent } from './components/work/work.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';

const websiteRoutes: Routes = [
  {path: '', component: NavbarComponent,
    children: [
      { path: '', component: AboutComponent },
      { path: 'about', component: AboutComponent },
      { path: 'work', component: WorkComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'contact', component: ContactComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]
  }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(websiteRoutes);
