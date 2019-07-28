import { Component, OnChanges, SimpleChanges} from '@angular/core';
import { Expense } from '../../_interfaces/expense';
import { RepositoryService } from '../../Shared/services/repository.service';
import {Location} from '@angular/common'

@Component({
  selector: 'app-add-or-update-budget',
  templateUrl: './add-or-update-budget.component.html',
  styleUrls: ['./add-or-update-budget.component.css']
})
export class AddOrUpdateBudgetComponent implements OnChanges{
  
  private accessPointUrl = "/api/expense/";
  expenseModel : Expense;

  constructor(private repository : RepositoryService, private _location : Location) {
    this.expenseModel = new Expense();
  }

  registerOnValidatorChange(fn: () => void): void { this._onChange = fn; }
  private _onChange: () => void;

  ngOnChanges(changes : SimpleChanges) {

    var required = 'requiredIf'
    var minLength = 'minLengthIf'
    
    if(required || minLength in changes){

      if(this._onChange) this._onChange;
    }
  }

  public clearForm(){
    this.expenseModel.name = null
    this.expenseModel.cost = 0
  }

    public createExpense(){
      try {
        this.repository.create(this.accessPointUrl, this.expenseModel).subscribe(
          data => console.log(data)
        );
        this.clearForm()
  
      } catch (error) {
        console.log(error)
      }
    };

    public back(){
      this._location.back();
    }

}
