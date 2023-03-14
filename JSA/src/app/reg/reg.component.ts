import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css'],
  
})
export class RegComponent {
  
  getValues(val:NgForm){
    console.log(val);
  }
  show(){
    alert("Job Applied Successfully...")
  }
}
