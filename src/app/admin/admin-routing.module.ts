import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';

const routes: Routes = [
	{
		path: '', component: AdminLayoutComponent, children: [
			{
				path: '', redirectTo: '/admin/login', pathMatch: 'full'
			},
			{
				path: 'login',
				loadChildren: () => import('./login-page/login-page.module').then(m => m.LoginPageModule)
			},
			{
				path: 'create',
				loadChildren: () => import('./create-page/create-page.module').then(m => m.CreatePageModule)
			},
			{
				path: 'post/:id/edit',
				loadChildren: () => import('./edit-page/edit-page.module').then(m => m.EditPageModule)
			},
			{
				path: 'dashboard',
				loadChildren: () => import('./dashboard-page/dashboard-page.module').then(m => m.DashboardPageModule)
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AdminRoutingModule { }
