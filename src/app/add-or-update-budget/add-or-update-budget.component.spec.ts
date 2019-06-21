import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrUpdateBudgetComponent } from './add-or-update-budget.component';

describe('AddOrUpdateBudgetComponent', () => {
  let component: AddOrUpdateBudgetComponent;
  let fixture: ComponentFixture<AddOrUpdateBudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrUpdateBudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrUpdateBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
