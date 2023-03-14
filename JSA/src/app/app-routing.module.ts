import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyJobpostComponent } from './company-reg/company-jobpost/company-jobpost.component';
import { CompanyLoginComponent } from './company-reg/company-login/company-login.component';
import { CompanyRegComponent } from './company-reg/company-reg.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegComponent } from './reg/reg.component';

const routes: Routes = [
  {
    component: HomepageComponent,
    path: ''
  },
  {
    component: CompanyRegComponent,
    path: 'register'
  },
  {
    component:CompanyLoginComponent,
      path:'register/login'
  },
  {
    component:CompanyJobpostComponent,
    path:'register/jobpost'
  },
  {
    component: RegComponent,
    path: 'reg'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
