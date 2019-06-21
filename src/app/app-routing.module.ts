import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TravelComponent } from './travel/travel.component';
import { ExpenseListComponent } from './Expense/expense-list/expense-list.component';
import { AddOrUpdateBudgetComponent } from './add-or-update-budget/add-or-update-budget.component';

const routes: Routes = [
  {path:'budget', component: ExpenseListComponent},
  {path:'add', component: AddOrUpdateBudgetComponent},
  {path:'', component: TravelComponent},
  {path:'travel', component: TravelComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
      ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
