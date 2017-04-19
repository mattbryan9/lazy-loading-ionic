import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { SharedModule } from '../shared/shared.module';
import { HeroComponent } from './hero.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent as HeroListComponent } from './heroes.component';
import { HeroService } from './hero.service';

import { HeroSearchComponent } from './hero-search.component';
import { HeroRoutingModule } from './hero-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  imports: [
    SharedModule,
    HttpModule,
    HeroRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    HeroComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    HeroListComponent
  ],
  providers: [ HeroService ]
})
export class HeroModule { }
