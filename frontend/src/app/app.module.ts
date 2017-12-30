import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './components/contact/contact.component';
import { WorkComponent } from './components/work/work.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/contact-links/contact-links.component';
import { ProjectsComponent } from './components/projects/projects.component';

// Application routing
import { appRouting } from './app.routing';

// Forms
import { ReactiveFormsModule } from '@angular/forms'
import { FormsService } from './services/forms.service';
import { HttpClientModule } from '@angular/common/http';

// Page scrolling
import { NgxPageScrollModule } from 'ngx-page-scroll';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    WorkComponent,
    ContactComponent,
    FooterComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPageScrollModule,
    appRouting
  ],
  providers: [
    FormsService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
