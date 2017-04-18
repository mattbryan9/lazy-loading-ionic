import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { HeroesComponent }  from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { HeroSearchComponent } from './hero-search.component';

import { TitleComponent } from './title.component';
import { UserService } from './user.service';
import { HighlightDirective } from './highlight.directive';
import { AwesomePipe } from './contact/awesome.pipe';
import { ContactComponent } from './contact/contact.component';
import { HighlightDirective as ContactHighlightDirective } from './contact/highlight.directive';
import { ContactService } from './contact/contact.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    HighlightDirective,
    TitleComponent,

    AwesomePipe,
    ContactComponent,
    ContactHighlightDirective
  ],
  providers: [ HeroService, UserService, ContactService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
