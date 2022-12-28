import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { employee } from '../model/employee';
import { ServiceService } from '../shared/service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  constructor(private fb:FormBuilder,public service:ServiceService){ }
  obj:employee = new employee();

  employeeform!:FormGroup;
  // this.service.updateUser(this.user).subscribe(data1 => {
  //   this.getUsers();
  namepattern!:"^[a-zA-Z ]{2,20}$";

  ngOnInit()
  {
    this.employeeform=this.fb.group
    ({
      empNo:['',[Validators.required]],
      name:['',[Validators.required,Validators.pattern(this.namepattern)]],
      basic:['',[Validators.required]],
      DeptNo:['',[Validators.required]]
    })
  }

  onSubmit(emp:employee)
  {
    this.service.postData(emp)
      .subscribe(response => {
          console.log(response);
          window.location.reload();
    });
  }

  onReset()
  {
    this.employeeform=this.fb.group
    ({
      empNo:['',[Validators.required]],
      name:['',[Validators.required,Validators.pattern(this.namepattern)]],
      basic:['',[Validators.required]],
      DeptNo:['',[Validators.required]]
    })
  }
}
