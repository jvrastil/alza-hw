import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDasboardComponent } from './hero-dasboard/hero-dasboard.component';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './state/reducers';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';
import { DasboardListSwitchComponent } from './dasboard-list-switch/dasboard-list-switch.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroDasboardComponent,
    HeroDetailComponent,
    DasboardListSwitchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreModule.forFeature('heroes', reducers),
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  entryComponents: [
    HeroDetailComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
