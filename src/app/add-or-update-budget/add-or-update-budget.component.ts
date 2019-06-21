import { Component, OnInit } from '@angular/core';
import { Expense } from '../_interfaces/expense';

@Component({
  selector: 'app-add-or-update-budget',
  templateUrl: './add-or-update-budget.component.html',
  styleUrls: ['./add-or-update-budget.component.css']
})
export class AddOrUpdateBudgetComponent implements OnInit {

  expense : Expense;
  constructor() { }

  ngOnInit() {
  }

}
