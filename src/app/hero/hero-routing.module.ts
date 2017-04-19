import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HeroesComponent as HeroListComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroComponent } from './hero.component';

const routes: Routes = [
  { path: '',
    component: HeroComponent,
    children: [
      { path: '',    component: HeroListComponent },
      { path: ':id', component: HeroDetailComponent },
      { path: 'detail/:id', component: HeroDetailComponent }
    ]
  }
];
@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class HeroRoutingModule { }
