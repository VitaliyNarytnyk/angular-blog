import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AdminRoutingModule } from "./admin-routing.module";

import { AdminLayoutComponent } from "./shared/components/admin-layout/admin-layout.component";
import { AdminComponent } from './admin.component';

@NgModule({
	declarations: [
		AdminLayoutComponent,
		AdminComponent
	],
	imports: [
		CommonModule,
		AdminRoutingModule
	],
	exports: [AdminComponent]
})
export class AdminModule {

}