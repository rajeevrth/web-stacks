import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {Router} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {TechnologyComponent} from './technology/technology.component';
import {FooterComponent} from './footer/footer.component';
import {TechHistoryComponent} from './tech-history/tech-history.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {OurProductsComponent} from './our-products/our-products.component';
import {InitialPipe} from './contact-us/initials';

@NgModule({
  declarations: [
    InitialPipe,
    AppComponent,
    HeaderComponent,
    TechnologyComponent,
    FooterComponent,
    TechHistoryComponent,
    ContactUsComponent,
    OurProductsComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router : Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}