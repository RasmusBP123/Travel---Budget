import { Component, Output, ChangeDetectionStrategy } from '@angular/core';
import { Expense } from 'src/app/_interfaces/expense';
import * as _ from 'lodash';
import { RepositoryService } from 'src/app/Shared/services/repository.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css'],
})

export class ExpenseListComponent{
  private accessPointUrl = "/api/expense/";

  @Output('expense') expense : Expense;
  public expenses : Expense[] = [];
  changeDetection: ChangeDetectionStrategy.OnPush

  constructor(private repo : RepositoryService) { }

   ngOnInit() {
    this.getAllExpenses()
  } 

  public getAllExpenses(){
    this.repo.getData(this.accessPointUrl).subscribe(
      (data : Expense[]) => {
        this.expenses = data;
        console.log(data);
      });
  }

  public getExpenseDetailsFromService(id: number){
    this.repo.getSingleData(this.accessPointUrl, id).subscribe((data : Expense) => {
      this.expense = data
    })
  }

  public patchExpense(id, expenseData : Expense){
    this.repo.update(this.accessPointUrl, id, expenseData).subscribe((data : Expense)=>{
      console.log(data)
      this.expense = data
    })
  }

  public deleteExpenseClicked(id : number){
    var index = this.expenses.findIndex(e => e.id === id)
    console.log(index)
    console.log(this.expenses)
    this.expenses.splice(index - 1, 1); //removes item from local array
    this.repo.delete(this.accessPointUrl, id).subscribe(); //Removes item from api
  }

  public getTotalExpense() : number{
    var totalExpense : number = 0;
    for (let value of this.expenses){
      totalExpense = totalExpense + value.cost
    }
    return totalExpense;
  }
}
