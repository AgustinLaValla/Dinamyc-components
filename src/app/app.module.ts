import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuestCardComponent } from './guest-card/guest-card.component';
import { UserCardComponent } from './user-card/user-card.component';
import { ProfileHostDirective } from './profile/profile-host.directive';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    GuestCardComponent,
    UserCardComponent,
    ProfileHostDirective,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [GuestCardComponent, UserCardComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
