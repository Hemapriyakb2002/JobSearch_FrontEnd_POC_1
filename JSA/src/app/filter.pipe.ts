import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpclientService } from './httpclient.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  constructor(public service:HomepageComponent){}
  transform(value: any, searchText:string) {
    if(value.length == 0 || searchText==''){
      this.service.ngOnInit();
    }
    const users = [];
    for(const user of value){
      if(user['company_name'].toLowerCase().includes(searchText.toLowerCase()) || user['company_city'].toLowerCase().includes(searchText.toLowerCase()) || user['job_role'].toLowerCase().includes(searchText.toLowerCase()) || user['company_type'].toLowerCase().includes(searchText.toLowerCase()) || user['job_description'].toLowerCase().includes(searchText.toLowerCase())){
        users.push(user)
      }
    }
    return users;
  }
  
}
