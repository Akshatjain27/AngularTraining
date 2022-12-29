import { Component } from '@angular/core';
import { employee } from '../model/employee';
import { ServiceService } from '../shared/service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  employeeList: employee[] = [];
  constructor(private service:ServiceService){ }
  
  ngOnInit():void
  {
   this.service.getAllData().subscribe((data:employee[]) => {
     this.employeeList = data;
   })
  }

  onUpdate(emp:employee)
  {
     this.service.onEditClicked(emp);
     
  }
  onDelete(empId:number)
  {
     this.service.deleteData(empId).subscribe();
     window.location.reload();
  }


}
