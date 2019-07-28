import { Component, OnInit, Input, Inject } from '@angular/core';
import { Post } from '../../_interfaces/post';
import { RepositoryService } from '../../Shared/services/repository.service';
import { ActivatedRoute } from '@angular/router';
import { Location, DOCUMENT } from '@angular/common';
import { fadeIn, fadeUp, liked } from '../../animations';

@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: [ './post.component.css' ],
	animations: [ fadeIn, fadeUp, liked ]
})
export class PostComponent implements OnInit {
	isPressed = false;
	post: Post;
	postLiked: any;
	private accessPointUrl = '/api/post/';
	numberOfLikes: any = 0;
	currentState = 'initial';

	constructor(
		private repo: RepositoryService,
		private route: ActivatedRoute,
		private location: Location,
		@Inject(DOCUMENT) document
	) {}

	ngOnInit() {
		this.route.paramMap.subscribe((params) => {
			console.log(params.get('id'));
			this.repo.getSingleData(this.accessPointUrl, parseInt(params.get('id'))).subscribe((p) => {
				console.log(p);
				this.post = p as Post;
			});
		});
	}

	public likes() {
		this.isPressed = true;
		this.numberOfLikes++;
		this.OnLikePressed();
	}

	public OnLikePressed() {
		let likeNotification = document.querySelector('.like-notification');
		likeNotification.classList.add('like');
		likeNotification.classList.remove('.like-notification');
	}

	public deletePost(id: number) {
		this.repo.delete(this.accessPointUrl, id).subscribe();
		this.location.back();
		console.log(this.post);
	}
}
