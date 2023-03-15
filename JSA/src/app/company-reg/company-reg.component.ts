
    //localStorage.setItem("session",JSON.stringify(data));
    //this.httpService.saveUser(data).subscribe((res)=>{
    //  console.log(res,"hi");
    //});


import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-company-reg',
  templateUrl: './company-reg.component.html',
  styleUrls: ['./company-reg.component.css']
})
export class CompanyRegComponent {
  constructor(public http:HttpClient){ }
  errorMessage:any='data saved';

  getValues(data:NgForm){    
    //console.log(data);

    //localStorage.setItem("session",JSON.stringify(data));
    //try{
      this.http.post<any>(`http://127.0.0.1:8000`,data).subscribe((res)=>{
        console.log(res.message);
      },(err)=>{
        this.errorMessage=err.error.detail;
      }
      );
   // }
  }
  

  // message(data:NgForm){
  //   return this.errorMessage
  // }
}