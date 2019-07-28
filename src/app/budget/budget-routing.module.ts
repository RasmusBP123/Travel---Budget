import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { AddOrUpdateBudgetComponent } from './add-or-update-budget/add-or-update-budget.component';

const routes: Routes = [
  {path:'', component:ExpenseListComponent},
  {path:'add', component: AddOrUpdateBudgetComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetRoutingModule { }
