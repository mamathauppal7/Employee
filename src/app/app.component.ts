
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmployeeApp';
   min:any;
  employees: any[] = [];

  constructor() {
    this.employees = [
      { eid: 1, ename: 'a', sal: 100 },
      { eid: 2, ename: 'b', sal: 1000 },
      { eid: 3, ename: 'c', sal: 50 },
      { eid: 4, ename: 'd', sal: 500 },
      { eid: 5, ename: 'e', sal: 300 }
    ]
    this.min = this.employees.reduce(function(old, item) {
      return (old.sal < item.sal) ? old : item
      }) 
   console.log(this.min);
  }  
  
   this.max = this.employees.reduce(function(old, item) {
      return (old.sal > item.sal) ? old : item
      }) 
   console.log(this.max);
  
}
