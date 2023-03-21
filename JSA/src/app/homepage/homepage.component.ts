import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { HttpclientService } from '../httpclient.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  companyList:any;
  todayDate=new Date().toDateString();
  cardList:any;
  pagedCardList: Observable<any[]>;
  constructor(public service:HttpclientService){
    this.companyList=[];
    this.cardList=[];
    this.pagedCardList=this.getPage(0,10);
  }
  
  ngOnInit():void{
    this.service.jobSearch().subscribe((res)=>{
      this.companyList=res;
    });
  }
  
  onPageChanged(event:PageEvent):void{
    this.pagedCardList=this.getPage(event.pageIndex,event.pageSize);
  }
  getPage(pageIndex:number,pageSize:number):Observable<any[]>{
    const startIndex = pageIndex * pageSize;
    const endIndex = startIndex + pageSize;
    const page = this.cardList.slice(startIndex,endIndex);
    return new Observable<any[]>(obs=>{
      obs.next(page);
    })
  }
}
