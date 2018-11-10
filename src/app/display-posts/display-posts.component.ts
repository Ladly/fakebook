import { Component, OnInit } from '@angular/core'
import { PostsService } from '../services/posts.service'

@Component({
	selector: 'app-display-posts',
	templateUrl: './display-posts.component.html',
	styleUrls: ['./display-posts.component.css']
})
export class DisplayPostsComponent implements OnInit {

	constructor(private postsService: PostsService) { }

	private posts: any[]

	getPosts(): void {
		this.postsService.getPosts()
			.subscribe(posts => this.posts = posts)
	}

	ngOnInit() {
		this.getPosts()
	}

}
