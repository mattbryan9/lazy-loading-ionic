import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* App Root */
import { AppComponent }  from './app.component';
import { TitleComponent } from './title.component';
import { UserService } from './user.service';

import { SharedModule } from './shared/shared.module';

/* Feature Modules */
import { ContactModule } from './contact/contact.module';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    ContactModule,
    AppRoutingModule
  ],
  providers: [ UserService ],
  declarations: [
    AppComponent,
    TitleComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
