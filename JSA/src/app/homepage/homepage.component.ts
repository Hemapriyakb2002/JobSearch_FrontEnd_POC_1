import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { HttpclientService } from '../httpclient.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  companyList:any[]=[];
  searchText:string='';
  todayDate=new Date().toDateString();
  pageslice:any;  

  constructor(public service:HttpclientService){
    this.companyList=[];
    this.service.jobSearch().subscribe((res)=>{
      this.companyList=res;
      const mockPageEvent: PageEvent = { pageIndex: 0, pageSize: 5, length: this.companyList.length };
      setTimeout(() => this.onPageChange(mockPageEvent), 0);
    });
    
  }

  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize; //0*5 1*5 or //0*10  0*25  0*50  
    let endIndex = startIndex + event.pageSize;   //0+5  5+5
    if(endIndex > this.companyList.length){
      endIndex = this.companyList.length
    }
    this.pageslice = this.companyList.slice(startIndex,endIndex) 
  }

  getId(comp:number){
    this.service.candidate(comp);
  }
 
}
