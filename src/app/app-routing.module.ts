import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from './product/product.component';	
import {EditComponent} from './edit/edit.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [

	{
		path:'',

		component: ProductComponent
	},
	{
		path:'edit/:id',
		component: EditComponent
	},
	{
		path:'login',
		component: LoginComponent
	},
	{
		path:'register',
		component: RegisterComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
