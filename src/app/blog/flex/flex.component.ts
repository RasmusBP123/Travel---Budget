import { Component, OnInit, Output } from '@angular/core';
import { Post } from '../../_interfaces/post';
import { RepositoryService } from '../../Shared/services/repository.service';
import { ErrorRepositoryService } from '../../Shared/services/error-repository.service';

@Component({
  selector: 'app-flex',
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.css']
})
export class FlexComponent implements OnInit{
  
  private accessPointUrl = "/api/post/";
  @Output('post') post : Post;

  public posts : Post[] = [];

  constructor(private repo : RepositoryService, private errorService : ErrorRepositoryService) {    
  }

  ngOnInit(){
    this.getAllPosts();
  }

  public getAllPosts(){
    this.repo.getData(this.accessPointUrl).subscribe((data : Post[]) => {
      this.posts = data
      console.log(data)
    },
    (error) => {
      this.errorService.handleError(error)
    })
  }

  public getSelectedPost(id : number){
    this.repo.getSingleData(this.accessPointUrl, id).subscribe((data : Post) => {
      this.post = data;
      console.log(data)
    })
  }

  public createPost(post : Post){
    this.repo.create(this.accessPointUrl, post).subscribe();
  }
}
