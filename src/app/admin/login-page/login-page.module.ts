import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageComponent } from './login-page.component';
import { LoginPageRoutingModule } from './login-page-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { exMarksPipe } from '../shared/pipes/exMarks.pipe';

@NgModule({
  declarations: [
    LoginPageComponent,
    exMarksPipe
  ],
  imports: [
    CommonModule,
    LoginPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [LoginPageComponent]
})
export class LoginPageModule { }
