import { Component, OnInit, Output } from '@angular/core';
import { Post } from '../../_interfaces/post';
import { RepositoryService } from '../../Shared/services/repository.service';
import { ErrorRepositoryService } from '../../Shared/services/error-repository.service';
import { Author } from 'src/app/_interfaces/author';

@Component({
	selector: 'app-flex',
	templateUrl: './blog.component.html',
	styleUrls: [ './blog.component.css' ]
})
export class FlexComponent implements OnInit {
	public posts: Post[] = [];
	authors: Author[] = [];
	private accessPointUrl = '/api/post/';
	@Output('post') post: Post;

	constructor(private service: RepositoryService, private errorService: ErrorRepositoryService) {}

	ngOnInit() {
		this.getAllPosts();
		this.getAllAuthorsFromService();
	}

	public getAllPosts() {
		this.service.getData(this.accessPointUrl).subscribe(
			(data: Post[]) => {
				this.posts = data;
				this.posts.reverse();
				console.log(data);
			},
			(error) => {
				this.errorService.handleError(error);
			}
		);
	}

	public getAllAuthorsFromService() {
		this.service.getData('api/authors').subscribe(
			(data: Author[]) => {
				this.authors = data;
			},
			(error) => {
				this.errorService.handleError(error);
			}
		);
	}

	public getSelectedPost(id: number) {
		this.service.getSingleData(this.accessPointUrl, id).subscribe((data: Post) => {
			this.post = data;
			console.log(data);
		});
	}

	public createPost(post: Post) {
		this.service.create(this.accessPointUrl, post).subscribe();
	}
}
