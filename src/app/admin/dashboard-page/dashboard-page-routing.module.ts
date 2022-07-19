import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../shared/services/auth.guard';

import { DashboardPageComponent } from './dashboard-page.component';

const routes: Routes = [
	{
		path: '',
		component: DashboardPageComponent,
		canActivate: [AuthGuard]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DashboardPageRoutingModule { }