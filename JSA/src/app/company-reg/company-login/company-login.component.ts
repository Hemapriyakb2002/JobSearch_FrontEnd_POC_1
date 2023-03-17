import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpclientService } from 'src/app/httpclient.service';

@Component({
  selector: 'app-company-login',
  templateUrl: './company-login.component.html',
  styleUrls: ['./company-login.component.css']
})
export class CompanyLoginComponent {
  constructor(public service:HttpclientService){ }
  
  getValues(data:NgForm){
    this.service.companyLogin(data)
    //console.log(this.service)
    //this.service.mydata=data;
    // this.service.getCompanyData().subscribe((res)=>{this.record=res})
    // console.log(this.record);
    
    
  }
  print(){
    
    //console.log(a);
  }
  
}
