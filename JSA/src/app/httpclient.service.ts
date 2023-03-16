import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {
  public serverUrl = `http://127.0.0.1:8000`;
  //public s=`http://127.0.0.1:8000/login`;
  constructor(public http:HttpClient, public toastr:ToastrService,public router:Router) { }
  
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
  

  // async companyLogin(data:NgForm) {
  //   try {
  //     var res = await this.http.post<any>(`${this.serverUrl}`+`/login`,data)
  //                              .toPromise()
  //                              .then((data)=>{
  //                               console.log(data);
  //                               localStorage.setItem("DB_Set",JSON.stringify(data));
  //     })
  //   } catch (error:any) {
  //     alert(error.error.detail);
  //     this.router.navigate(['']);
  //   } 
  // }
  companyLogin(data:NgForm){
      return this.http.post<any>(`${this.serverUrl}/login`, data)
        .pipe(
          catchError(this.handleError)
        );
    }
  
    private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
      } 
      // Return an observable with a user-facing error message.
      return throwError((error.error.message));
    };
  }


