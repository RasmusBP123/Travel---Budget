import { Component, OnInit, OnChanges, SimpleChange, SimpleChanges, Inject, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { RepositoryService } from '../../Shared/services/repository.service';
import { Post } from '../../_interfaces/post';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-postadd',
  templateUrl: './postadd.component.html',
  styleUrls: ['./postadd.component.css']
})
export class PostaddComponent implements OnChanges, AfterViewInit{
  
  accespointUrl = 'api/post'
  postModel : Post;
  @ViewChild('nameRef', {static: false}) titleRef : ElementRef
  private _onChange: () => void;

  registerOnValidatorChange(fn: () => void): void { this._onChange = fn; }
 
  ngOnChanges(changes : SimpleChanges) {

    var required = 'requiredIf'
    var minLength = 'minLengthIf'
    
    if(required || minLength in changes){

      if(this._onChange) this._onChange;
    }
  }

  ngAfterViewInit(){
    this.titleRef.nativeElement.focus();
  }

  constructor(private repo : RepositoryService) {
    this.postModel = new Post();
   }

  public addPost(){
    this.repo.createPost(this.accespointUrl, 1, this.postModel).subscribe();
  }

}
