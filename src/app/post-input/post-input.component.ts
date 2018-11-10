import { Component, OnInit } from '@angular/core'
import { PostsService } from '../services/posts.service'
import { Post } from '../entities/post'
import { Location } from '@angular/common'


@Component({
	selector: 'app-post-input',
	templateUrl: './post-input.component.html',
	styleUrls: ['./post-input.component.css']
})
export class PostInputComponent implements OnInit {

	constructor(
		private postService: PostsService,
		private location: Location,
		) { }

	private post: Post = {
		'user': 'Vuk',
		'text': '',
		'videoUrl': '',
		'imageUrl': ''
	}

	private sendData(): void {
		this.postService.postPost(this.post)
		this.post.text = ''
		location.reload()
	}

	ngOnInit() {
	}

}
