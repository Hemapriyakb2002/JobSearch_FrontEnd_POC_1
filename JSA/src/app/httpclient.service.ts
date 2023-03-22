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
  mydata: any;
  myObject: any;
  userApply: any;
  constructor(public http:HttpClient, public toastr:ToastrService,public router:Router) {  }
  
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
      var res = await this.http.post<any>(`${this.serverUrl}`+`/login`,data).toPromise()
        this.mydata=res.data;
    } catch (error:any) {
      alert(error.error.detail);
      this.router.navigate(['']);
    } 
  }

  companyJobpost(data:NgForm){
    //console.log(data.value);
    this.http.post<any>(`${this.serverUrl}`+`/job_entry`,data).subscribe((res)=>{
      alert(res.message);
      this.router.navigate(['']);
    })
  }
  
  jobSearch(){
    return this.http.get<any>(`${this.serverUrl}`+`/job_search`)
  }

  candidate(comp:any){
    this.userApply=comp;
    console.log(this.userApply);
  }

  candidateApply(data:NgForm){
    console.log(data);
    this.http.post<any>(`${this.serverUrl}`+`/candidate_apply`,data).subscribe((res)=>{
      alert(res.message);
      this.router.navigate(['']);
    })
  }
}
    
  



