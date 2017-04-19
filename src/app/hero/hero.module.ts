import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { HeroComponent } from './hero.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent as HeroListComponent } from './heroes.component';
import { HighlightDirective } from './highlight.directive';
import { HeroService } from './hero.service';

import { HeroSearchComponent } from './hero-search.component';
import { HeroRoutingModule } from './hero-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    HeroRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    HeroComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    HeroListComponent,
    HighlightDirective
  ],
  providers: [ HeroService ]
})
export class HeroModule { }
