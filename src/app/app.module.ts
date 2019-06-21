import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnvironmentUrlService } from './Shared/services/environment-url.service';
import { RepositoryService } from './Shared/services/repository.service';
import { RouterModule } from '@angular/router';
import { ExpenseListComponent } from './Expense/expense-list/expense-list.component';
import { MenuComponent } from './menu/menu/menu.component';
import { TravelComponent } from './travel/travel.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseListComponent,
    MenuComponent,
    TravelComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'home', component: MenuComponent},
      { path: 'budget', component: ExpenseListComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' }
    ]),
    AppRoutingModule
  ],
  providers: [
    EnvironmentUrlService,
    RepositoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
