import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeroComponent } from './hero.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent as HeroListComponent } from './heroes.component';
import { HighlightDirective } from './highlight.directive';
import { HeroService } from './hero.service';
import { RouterModule, Routes} from '@angular/router';
import {HeroSearchComponent} from "./hero-search.component";


const routes: Routes = [
  { path: '', component: HeroComponent,
    children: [
      { path: '',    component: HeroListComponent },
      { path: ':id', component: HeroDetailComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
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
