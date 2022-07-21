import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatePageComponent } from './create-page.component';
import { CreatePageRoutingModule } from './create-page-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'app/shared/shared.module';
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [CreatePageComponent],
  imports: [
    CommonModule,
    CreatePageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,

  ],
  exports: [CreatePageComponent,
  ]
})
export class CreatePageModule { }
