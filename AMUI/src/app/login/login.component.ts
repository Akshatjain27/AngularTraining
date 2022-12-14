import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginform: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private router:Router) {

    }

  submit() {
    if (this.loginform.valid) {
      this.router.navigate(['/home']);
    }
  }
  @Input() error!: string | null;

  @Output() submitEM = new EventEmitter();

}


