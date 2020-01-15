import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAuthenticationRoutingModule } from './user-authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material/angularMaterial.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    UserAuthenticationRoutingModule,
    MaterialModule,
    FormsModule
    ,ReactiveFormsModule
  ]
})
export class UserAuthenticationModule { }
