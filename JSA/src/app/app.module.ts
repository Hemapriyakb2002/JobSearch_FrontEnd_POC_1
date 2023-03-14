import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegComponent } from './reg/reg.component';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { CompanyRegComponent } from './company-reg/company-reg.component';
import { CompanyLoginComponent } from './company-reg/company-login/company-login.component';
import { CompanyJobpostComponent } from './company-reg/company-jobpost/company-jobpost.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RegComponent,
    HomepageComponent,
    CompanyRegComponent,
    CompanyLoginComponent,
    CompanyJobpostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
