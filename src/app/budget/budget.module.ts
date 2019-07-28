import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetRoutingModule } from './budget-routing.module';
import { DetailsComponent } from './details/details.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { AddOrUpdateBudgetComponent } from './add-or-update-budget/add-or-update-budget.component';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [DetailsComponent, ExpenseListComponent, AddOrUpdateBudgetComponent],
  imports: [
    CommonModule,
    BudgetRoutingModule,
    FormsModule,
    ScrollingModule,
    HttpClientModule,
  ],
})
export class BudgetModule { 
  constructor() {
    console.log('Lazily Loaded : BudgetModule');
  }
}
