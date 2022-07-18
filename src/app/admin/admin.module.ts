import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { AdminRoutingModule } from "./admin-routing.module";
import { AdminLayoutComponent } from "./shared/components/admin-layout/admin-layout.component";
import { AdminComponent } from './admin.component';
import { AuthService } from "./shared/services/auth.service";
import { SharedModule } from "app/shared/shared.module";

@NgModule({
	declarations: [
		AdminLayoutComponent,
		AdminComponent
	],
	imports: [
		CommonModule,
		AdminRoutingModule,
		SharedModule
	],
	exports: [AdminComponent],
	providers: [AuthService]
})
export class AdminModule {

}