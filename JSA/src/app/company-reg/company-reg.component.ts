import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-company-reg',
  templateUrl: './company-reg.component.html',
  styleUrls: ['./company-reg.component.css']
})
export class CompanyRegComponent {
  constructor(public http:HttpClient){}
  getValues(data:NgForm){    
    console.log(data);

    //localStorage.setItem("session",JSON.stringify(data));
   this.http.post<any>(`http://127.0.0.1:8000`,data).subscribe((res)=>{
      console.log(res);
    });
  }
}
