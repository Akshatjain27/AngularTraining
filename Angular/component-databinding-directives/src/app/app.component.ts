import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  username:string='Akshat';
  
  isDirective:boolean=false;
  NewArray:number[]=[];
  count:number=0;
  i:number = 0;
  ngOnInit(): void {
    
  }
  title = 'component-databinding-directives';
  reset(){
    this.username="";
    
  }
  buttonclick()

  {
 
    this.count++;
 
    this.NewArray[this.i] = this.count;
 
    this.i++;
 
  }
}
