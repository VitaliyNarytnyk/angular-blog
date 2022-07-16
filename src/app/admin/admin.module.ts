import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AdminRoutingModule } from "./admin-routing.module";
import { LoginPageComponent } from "./login-page/login-page.component";
import { AdminLayoutComponent } from "./shared/components/admin-layout/admin-layout.component";
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';

@NgModule({
	declarations: [
		AdminLayoutComponent,
		LoginPageComponent,
  DashboardPageComponent,
  CreatePageComponent,
  EditPageComponent
	],
	imports: [
		CommonModule,
		AdminRoutingModule
	],
	exports: []
})
export class AdminModule {

}