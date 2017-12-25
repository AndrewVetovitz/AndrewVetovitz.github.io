import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { WorkComponent } from './work/work.component';
import { AboutComponent } from './about/about.component';

// Application routing
import { appRouting } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    WorkComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    appRouting
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
