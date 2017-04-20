import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* App Root */
import { AppComponent }  from './app.component';

/* Feature Modules */
import { CoreModule } from '../shared/core/core.module';
import { ContactModule } from '../shared/contact/contact.module';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

import { IonicModule } from 'ionic-angular';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule.forRoot({userName: 'Miss Marple'}),
    ContactModule,
    AppRoutingModule,
    IonicModule.forRoot(AppComponent, {})
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
