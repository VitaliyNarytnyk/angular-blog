import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from 'src/app/home-page/home-page.component';
import { PostPageComponent } from 'src/app/post-page/post-page.component';
import { MainLayoutComponent } from './main-layout.component';

const routes: Routes = [
	{
		path: '', component: MainLayoutComponent, children: [
			{ path: '', redirectTo: '/', pathMatch: 'full' },
			{ path: '', component: HomePageComponent },
			{ path: 'post/:id', component: PostPageComponent }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class MainLayoutRoutingModule { }
