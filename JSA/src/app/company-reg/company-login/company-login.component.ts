import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpclientService } from 'src/app/httpclient.service';

@Component({
  selector: 'app-company-login',
  templateUrl: './company-login.component.html',
  styleUrls: ['./company-login.component.css']
})
export class CompanyLoginComponent {
  constructor(public httpService:HttpclientService){

  }
  getValues(data:NgForm){
    console.log(data);
    //this.httpService.saveUser(`/login`,data).subscribe((res)=>{
    //  console.log(res);
    //});
  }
}
