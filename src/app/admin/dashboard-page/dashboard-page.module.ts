import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardPageComponent } from './dashboard-page.component';
import { DashboardPageRoutingModule } from './dashboard-page-routing.module';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../shared/pipes/search.pipe';

@NgModule({
  declarations: [
    DashboardPageComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    DashboardPageRoutingModule,
    FormsModule
  ],
  exports: [DashboardPageComponent]
})
export class DashboardPageModule { }
