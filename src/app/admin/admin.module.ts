import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { AdminRoutingModule } from "./admin-routing.module";
import { AdminLayoutComponent } from "./shared/components/admin-layout/admin-layout.component";
import { AdminComponent } from './admin.component';
import { AuthService } from "./shared/services/auth.service";
import { SharedModule } from "app/shared/shared.module";
import { AuthGuard } from "./shared/services/auth.guard";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
	declarations: [
		AdminLayoutComponent,
		AdminComponent
	],
	imports: [
		CommonModule,
		AdminRoutingModule,
		SharedModule,
		FormsModule,
		ReactiveFormsModule
	],
	exports: [AdminComponent],
	providers: [AuthGuard]
})
export class AdminModule {

}