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

  obj:employee = new employee();

  employeeform!:FormGroup;

  isEdit:boolean = false;
  
  constructor(private fb:FormBuilder,public service:ServiceService){
    service.eventCallback$.subscribe(params => {
      console.log('params', params);
      this.obj = params;
      // this.employeeform = this.fb.group (
      //   {
      //     empNo:[params.empNo],
      //     name:[params.name],
      //     basic:[params.basic],
      //     DeptNo:[params.deptNo]
      //   }
      // );
      
      this.isEdit = true;
    })
   }
 
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
    if (!this.isEdit) {
      this.service.postData(emp)
        .subscribe(response => {
            console.log(response);
            window.location.reload();
      });
    } 
    else {
      this.service.updateData(emp)
        .subscribe(response => {
          console.log(response);
          this.isEdit = false;
          window.location.reload();
        })
    }
  }

  onReset()
  {
    this.employeeform.reset();
    // this.employeeform=this.fb.group
    // ({
    //   empNo:['',[Validators.required]],
    //   name:['',[Validators.required,Validators.pattern(this.namepattern)]],
    //   basic:['',[Validators.required]],
    //   DeptNo:['',[Validators.required]]
    // })
  }
}
