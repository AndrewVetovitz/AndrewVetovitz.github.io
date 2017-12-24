import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';


const websiteRoutes: Routes = [
  {path: '', component: NavbarComponent,
    children: [
      { path: '', component: AboutComponent },
      { path: 'about', component: AboutComponent },
      { path: 'work', component: WorkComponent },
      { path: 'contact', component: ContactComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]
  }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(websiteRoutes);
