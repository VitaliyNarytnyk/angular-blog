import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../shared/services/auth.guard';

import { CreatePageComponent } from './create-page.component';

const routes: Routes = [
	{
		path: '',
		component: CreatePageComponent,
		canActivate: [AuthGuard]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CreatePageRoutingModule { }