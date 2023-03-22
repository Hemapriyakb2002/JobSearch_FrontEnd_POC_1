import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpclientService } from '../httpclient.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css'],
  
})
export class RegComponent {
  constructor(public service:HttpclientService){ }
  getValues(data:any, company_id:any,job_id:any){
    const data_set:any={
      candidate_name:data.candidate_name,
      candidate_email:data.candidate_email,
      candidate_phone:data.candidate_phone,
      highest_qualification:data.highest_qualification,
      Degree:data.Degree,
      communication_address:data.communication_address,
      current_city:data.current_city,
      company_id:company_id,
      company_job_id:job_id
    }
    this.service.candidateApply(data_set);
  }
}
