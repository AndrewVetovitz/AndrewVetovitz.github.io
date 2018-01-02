import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { AboutContentComponent } from './components/about-content/about-content.component';
import { WorkComponent } from './components/work/work.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactLinksComponent } from './components/contact-links/contact-links.component';

// Application routing
import { appRouting } from './app.routing';

// Forms
import { ReactiveFormsModule } from '@angular/forms'
import { FormsService } from './services/forms.service';
import { HttpClientModule } from '@angular/common/http';

// Nav bar scrolling
import { NgxPageScrollModule } from 'ngx-page-scroll';

// Page scrolling
import { ScrollSpyModule } from 'ngx-scrollspy';


// Services
import { HeightService } from './services/height.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    AboutContentComponent,
    WorkComponent,
    ProjectsComponent,
    ContactComponent,
    ContactLinksComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPageScrollModule,
    ScrollSpyModule.forRoot(),
    appRouting
  ],
  providers: [
    FormsService,
    HeightService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
