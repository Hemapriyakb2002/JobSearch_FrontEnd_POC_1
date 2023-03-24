import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any, searchText:string) {
    if(value.length == 0 || searchText==''){
      return value;
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
