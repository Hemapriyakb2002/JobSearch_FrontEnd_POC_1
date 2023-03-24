

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpclientService } from '../httpclient.service';

@Component({
  selector: 'app-company-reg',
  templateUrl: './company-reg.component.html',
  styleUrls: ['./company-reg.component.css']
})
export class CompanyRegComponent {
  constructor(public service:HttpclientService){ }
  
  getValues(data:NgForm){
    this.service.companyReg(data)
  }

}