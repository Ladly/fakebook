import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Post } from '../entities/post'

@Injectable({
	providedIn: 'root'
})
export class PostsService {

	constructor(private http: HttpClient) { }

	private postsUrl = 'http://localhost:3000/posts'

	public getPosts(): Observable<any[]> {
		return this.http.get<any[]>(this.postsUrl)
	}

	public postPost(post: Post): any {
		return  this.http.post(this.postsUrl, post)
			.subscribe(
				data => console.log(data),
				error => console.log(error)
			)
	}
}
