import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { AdminRoutingModule } from "./admin-routing.module";
import { AdminLayoutComponent } from "./shared/components/admin-layout/admin-layout.component";
import { AdminComponent } from './admin.component';
import { SharedModule } from "app/shared/shared.module";
import { AuthGuard } from "./shared/services/auth.guard";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AlertComponent } from './shared/components/alert/alert.component';
import { AlertService } from "./shared/services/alert.service";

@NgModule({
	declarations: [
		AdminLayoutComponent,
		AdminComponent,
		AlertComponent,
	],
	imports: [
		CommonModule,
		AdminRoutingModule,
		SharedModule,
		FormsModule,
		ReactiveFormsModule,
	],
	exports: [AdminComponent],
	providers: [AuthGuard, AlertService]
})
export class AdminModule {

}