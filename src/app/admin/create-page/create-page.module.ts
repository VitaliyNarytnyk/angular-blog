import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatePageComponent } from './create-page.component';
import { CreatePageRoutingModule } from './create-page-routing.module';

@NgModule({
  declarations: [CreatePageComponent],
  imports: [
    CommonModule,
    CreatePageRoutingModule
  ],
  exports: [CreatePageComponent]
})
export class CreatePageModule { }
