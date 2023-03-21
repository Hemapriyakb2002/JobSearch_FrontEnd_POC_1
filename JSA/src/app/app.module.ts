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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { HttpclientService } from './httpclient.service';
//import { NgToastModule } from 'ng-angular-popup';

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
    HttpClientModule,
    NgbModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    ToastrModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      //progressAnimation: 'decreasing',
      preventDuplicates: true,
      progressBar: true,
      timeOut: 3000
    })
  ],
  providers: [HttpclientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
