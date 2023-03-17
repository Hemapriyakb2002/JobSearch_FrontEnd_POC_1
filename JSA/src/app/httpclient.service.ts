import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {
  public serverUrl = `http://127.0.0.1:8000`;
  public id = 1;
  mydata: any;
  constructor(public http:HttpClient, public toastr:ToastrService,public router:Router) { 
    
  }
  
  async companyReg(data:NgForm) {
    try {
      var res = await this.http.post<any>(`${this.serverUrl}`,data)
                               .toPromise()
                               .then((res)=>{
                                 alert(res.message)
                                 this.router.navigate(['register/login']);
      })
    } catch (error:any) {
      alert(error.error.detail);
    } 
  }

  async companyLogin(data:NgForm) {
    try {
      var res = await this.http.post<any>(`${this.serverUrl}`+`/login`,data)
                               .toPromise()
                               .then((data1)=>{
                                // const {company_name,company_email,company_city,company_address,company_type
                                // } = data.data
                                this.mydata=data1.data;
                                this.setCompanyData(data1.data);
                                // localStorage.setItem("company_name",company_name);
                                // localStorage.setItem("company_email",company_email);
                                // localStorage.setItem("company_city",company_city);
                                // localStorage.setItem("company_address",company_address);
                                // localStorage.setItem("company_type",company_type);             
        })
    } catch (error:any) {
      alert(error.error.detail);
      this.router.navigate(['']);
    } 
  }
  
  setCompanyData(data:any) {
    //mydata = data;
    //console.log(this.mydata);
  }

  getCompanyData(){
    // console.log(this.mydata);
    return this.http.get<any>("http://127.0.0.1:8000/")
  }
  }

  // companyJobpost(data:NgForm){
  //   // this.http.post<any>(`${this.serverUrl}`+`/job_entry`,data).subscribe((res)=>{
  //   //   console.log(res);
  //   })
    
  



