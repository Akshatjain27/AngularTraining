import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:"register",component:RegistrationComponent},
  {path:"login",component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
