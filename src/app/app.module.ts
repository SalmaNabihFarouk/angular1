import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { about } from './about/about.component';
import { navbar } from './navbar/navbar.component';
import { porto} from './porto/porto.component';
import { contact } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    about,
    navbar,
    porto,
    contact
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
