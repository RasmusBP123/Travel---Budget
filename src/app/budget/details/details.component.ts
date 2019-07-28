import { Component, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Expense } from '../../_interfaces/expense';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent{

  @Input('expense') expense : Expense = new Expense();
  @Output('expenseOutput') expenseOutput = new EventEmitter();
  @Output('expensePatch') expensePatch = new EventEmitter();
  isHidden = false;

  constructor(private cd : ChangeDetectorRef){}

  public deleteExpenseFromChild(){
    if(this.expense == null){
      this.isHidden = true;
    }
    else {
      this.isHidden = !this.isHidden;
      this.expenseOutput.emit()
      this.cd.markForCheck()
      console.log("hello")
      this.clearInfo()
    }
  }

  public patchExpenseFromChild(){
    this.expensePatch.emit()
    console.log("hellerigog")
  }

  public clearInfo(){
    this.expense.id = null;
    this.expense.name = '';
    this.expense.cost = null;
  }
}
