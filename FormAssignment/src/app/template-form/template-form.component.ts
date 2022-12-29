import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Form2 } from '../model/reactive';
import { Employee } from '../model/template';


@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})


export class TemplateFormComponent implements OnInit {
  constructor(private fb:FormBuilder) { }
  
  emparr:Employee[]=[];
  formarr:Form2[]=[];
  registeruser!:FormGroup;
  Projectform!:FormGroup; //for form2
  isDisable:boolean = true;
  isTest:boolean = false;

  emailpattern!:"^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  ngOnInit(): void 
  {
    this.registeruser=this.fb.group(
      {
      email:['',[Validators.required,Validators.pattern(this.emailpattern)]],
      subcriptions:['',[Validators.required]],
      password:['',[Validators.required]],
      }
    )

    this.Projectform=this.fb.group({

      projectname:['',[Validators.required]],
      mail2:['',[Validators.required,Validators.pattern(this.emailpattern)]],
      projectstatus:['',[Validators.required]],
      
    })
  }
  onsubmit()
  {
    if(this.registeruser.valid)
    {
     console.log(this.registeruser.value);
     this.emparr.push(this.registeruser.value);
    }
    console.log(this.emparr)

    if(this.Projectform.valid && this.Projectform.value['projectname'] != 'test')
    {
     console.log(this.Projectform.value);
     console.log(this.Projectform.value['projectname']);
     console.log("error");
    }
    else if(this.Projectform.value['projectname'] == 'test'){
      this.isTest = true;
      console.log("test");
    }
    else{
     this.isDisable=false;
     console.log("Empty");
    }
 }

}
