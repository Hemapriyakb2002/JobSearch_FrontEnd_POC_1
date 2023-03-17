import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpclientService } from 'src/app/httpclient.service';

@Component({
  selector: 'app-company-jobpost',
  templateUrl: './company-jobpost.component.html',
  styleUrls: ['./company-jobpost.component.css']
})
export class CompanyJobpostComponent {
  constructor(public service:HttpclientService){
   this.record=this.service
  }
  public record:any;
  getValues(data:NgForm){
    
  }
  ngOnInit(){
    
      this.record = this.service;
    console.log(this.record);
  }
  show(){
    alert("Job applied successfully")
  }
}
