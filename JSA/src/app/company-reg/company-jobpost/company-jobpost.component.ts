import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-company-jobpost',
  templateUrl: './company-jobpost.component.html',
  styleUrls: ['./company-jobpost.component.css']
})
export class CompanyJobpostComponent {
  getValues(val:NgForm){
    console.log(val);
  }
  show(){
    window.alert("Job posted successfully...");
  }
}
