import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
	providedIn: 'root'
})
export class PostsService {

	constructor(private http: HttpClient) { }

	private postsUrl = 'http://localhost:3000/posts'

	getPosts(): Observable<any[]> {
		return this.http.get<any[]>(this.postsUrl)
	}

	postPost(): any {
		return  this.http.post(this.postsUrl, {
			'user': 'Vuk',
			'text': 'this is best image evaaaaah',
			'videUrl': '',
			'imageUrl': 'https://i2.wp.com/www.ourmovielife.com/wp-content/uploads/2018/08/kate.jpg'
		})
			.subscribe(
				data => console.log(data),
				error => console.log(error)
			)
	}
}
