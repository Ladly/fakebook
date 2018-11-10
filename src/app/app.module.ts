import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { HomePageComponent } from './home-page/home-page.component';
import { DisplayPostsComponent } from './display-posts/display-posts.component'

@NgModule({
	declarations: [
		AppComponent,
		HomePageComponent,
		DisplayPostsComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
