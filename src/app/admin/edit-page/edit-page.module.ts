import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditPageComponent } from './edit-page.component';
import { EditPageRoutingModule } from './edit-page-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  declarations: [EditPageComponent],
  imports: [
    CommonModule,
    EditPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [EditPageComponent]
})
export class EditPageModule { }
