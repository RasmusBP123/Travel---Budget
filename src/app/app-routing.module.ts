import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TravelComponent } from './travel/travel.component';
import { ErrorComponent } from './server500/error.component';

const routes: Routes = [
  {path:'', component: TravelComponent},
  {path:'travel', component: TravelComponent},
  {path:'blog', loadChildren: () => import('./blog/blog.module').then(mod => mod.BlogModule)},
  {path:'budget', loadChildren: () => import('./budget/budget.module').then(mod => mod.BudgetModule)},
  {path:'authors', loadChildren: () => import('./authors/authors.module').then(mod => mod.AuthorsModule)},
  {path:'404', loadChildren: () => import('./error/error.module').then(mod => mod.ErrorModule)},
  {path:'**', pathMatch:'full' , component: ErrorComponent},
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
      ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
