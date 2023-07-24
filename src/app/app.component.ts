import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'assignApp';
  url = 'https://gorest.co.in/public/v2/users';
  data1:any
  isAscending = true; 

  constructor(private http:HttpClient){
    http.get(this.url).subscribe(dataFromjson =>{
      this.data1 = dataFromjson
    })
  }

  sortByName(): void {
    this.data1.sort((a:any, b:any) => a.name.localeCompare(b.name));
  }
  
}
