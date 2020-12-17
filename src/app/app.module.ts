import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { GrantModule } from './grant/grant.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { CloudsComponent } from './common/clouds/clouds.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, CloudsComponent],
  imports: [BrowserModule, AppRoutingModule, GrantModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
