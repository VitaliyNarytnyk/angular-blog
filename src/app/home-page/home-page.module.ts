import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { PostModule } from '../shared/components/post/post.module';


@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    PostModule
  ],
  exports: [HomePageComponent]
})
export class HomePageModule { }
