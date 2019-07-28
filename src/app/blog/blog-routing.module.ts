import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlexComponent } from './flex/flex.component';
import { PostComponent } from './post/post.component';
import { PostaddComponent } from './postadd/postadd.component';

const routes: Routes = [
  {path:'', component: FlexComponent},
  {path:'post/:id', component: PostComponent},
  {path:'postadd', component: PostaddComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
