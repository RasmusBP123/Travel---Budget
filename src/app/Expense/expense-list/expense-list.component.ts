import { Component, OnInit } from '@angular/core';
import { RepositoryService } from 'src/app/Shared/services/repository.service';
import { Expense } from 'src/app/_interfaces/expense';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {

  public expenses : Expense[];

  constructor(private repository : RepositoryService) { }

  ngOnInit() {
    this.getAllExpenses()
  }

  public getAllExpenses(){
    let apiAddress = 'api/expense/';
    this.repository.getData(apiAddress).subscribe(
      data => {
        this.expenses = data as Expense[];
      });
  }
}
