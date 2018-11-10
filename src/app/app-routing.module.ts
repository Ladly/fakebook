import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomePageComponent } from './home-page/home-page.component'
import { UserPageComponent } from './user-page/user-page.component'

const routes: Routes = [
	{ path: '', component: HomePageComponent },
	{ path: 'user', component: UserPageComponent }
]

@NgModule({
	declarations: [],
	exports: [ RouterModule ],
	imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
