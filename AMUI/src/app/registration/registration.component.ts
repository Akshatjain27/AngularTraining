import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';

import { User } from '../model/user';

interface Skills {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit{

  user:User = new User();
  hide=true;
  registrationform!:FormGroup;
  constructor(private fb:FormBuilder){}
  mobilepattern= /[0-9\+\-\ ]/;
  emailpattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  namepattern = /^[a-zA-Z ]{6,32}$/;
  userNamepattern = /^[a-z][a-z0-9]{5,20}$/;
  skills: Skills[] = [
    {value: 'Basic-0', viewValue: 'Angular Basic'},
    {value: 'Intermediate-1', viewValue: 'Angular Intermediate'},
    {value: 'Advanced-2', viewValue: 'Angular Advanced'},
  ];
  ngOnInit() {
    this.registrationform=this.fb.group
    ({
      name:['',[Validators.required,Validators.pattern(this.namepattern)]],
      emailId:['',[Validators.required,Validators.pattern(this.emailpattern)]],
      userName:['',[Validators.required,,Validators.pattern(this.userNamepattern)]],
      password:['',[Validators.required]],
      gender:['',[Validators.required]],
      dob:['',[Validators.required]],
      mobNo:['',[Validators.required,Validators.pattern(this.mobilepattern)]],
      skills:['',[Validators.required]],
    })
  }

  onSubmit(user:User){
    
  }

  onReset(){
    this.registrationform.reset();
  }

}
