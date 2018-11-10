import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { HomePageComponent } from './home-page/home-page.component'
import { DisplayPostsComponent } from './display-posts/display-posts.component'
import { NavigationComponent } from './navigation/navigation.component'
import { UserPageComponent } from './user-page/user-page.component'
import { AppRoutingModule } from './app-routing.module'
import { PostInputComponent } from './post-input/post-input.component'

@NgModule({
	declarations: [
		AppComponent,
		HomePageComponent,
		DisplayPostsComponent,
		NavigationComponent,
		UserPageComponent,
		PostInputComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
