import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpclientService } from 'src/app/httpclient.service';

@Component({
  selector: 'app-company-jobpost',
  templateUrl: './company-jobpost.component.html',
  styleUrls: ['./company-jobpost.component.css']
})
export class CompanyJobpostComponent {
  constructor(public service:HttpclientService){  }
 
  getValues(data:any, id:number){
    const {job_role,job_description}=data;
    const data_set:any={
      job_role:job_role,
      job_description:job_description,
      company_id:id
    }
    this.service.companyJobpost(data_set);
  }  
}
