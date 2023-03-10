import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegComponent } from './reg/reg.component';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { CompanyRegComponent } from './company-reg/company-reg.component';
import { CompanyLoginComponent } from './company-reg/company-login/company-login.component';

@NgModule({
  declarations: [
    AppComponent,
    RegComponent,
    HomepageComponent,
    CompanyRegComponent,
    CompanyLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
