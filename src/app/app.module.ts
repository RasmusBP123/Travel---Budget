import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import * as _ from 'lodash';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { EnvironmentUrlService } from './Shared/services/environment-url.service';
import { RepositoryService } from './Shared/services/repository.service';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu/menu.component';
import { TravelComponent } from './travel/travel.component';
import { DetailsComponent } from './budget/details/details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorComponent } from './server500/error.component';
import { LoaderInterceptorService } from './Shared/services/loader-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TravelComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ScrollingModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [
    EnvironmentUrlService,
    RepositoryService,
    DetailsComponent,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptorService,
    multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
