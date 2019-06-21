import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TravelComponent } from './travel/travel.component';
import { MenuComponent } from './menu/menu/menu.component';
import { ExpenseListComponent } from './Expense/expense-list/expense-list.component';

const routes: Routes = [
  {path:'budget', component: ExpenseListComponent},
  {path:'', component: MenuComponent},
  {path:'travel', component: TravelComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
      ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
