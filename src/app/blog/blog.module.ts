import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { FlexComponent } from './flex/flex.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PostComponent } from './post/post.component';
import { PostaddComponent } from './postadd/postadd.component';
import { TrunctaceStringLength } from '../pipes/trunctace';

@NgModule({
  declarations: [FlexComponent, PostComponent, PostaddComponent, TrunctaceStringLength,],
  imports: [
    CommonModule,
    BlogRoutingModule,
    FormsModule,
    ScrollingModule,
    HttpClientModule,
  ],
})
export class BlogModule { 
  constructor() {
    console.log('Lazily Loaded : BlogModule');
  }
}
