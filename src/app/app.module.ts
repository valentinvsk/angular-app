import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardsComponent } from './cards/cards.component';
import { AnimatedComponent } from './animated/animated.component';
import { PawComponent } from './paw/paw.component';
import { WalkingCatComponent } from './walking-cat/walking-cat.component';
import { WindowCatComponent } from './window-cat/window-cat.component';
import { ParalaxFallComponent } from './paralax-fall/paralax-fall.component';
import { DataTableComponent } from './data-table/data-table.component';
import { DataTable2Component } from './data-table-2/data-table-2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    CardsComponent,
    AnimatedComponent,
    PawComponent,
    WalkingCatComponent,
    WindowCatComponent,
    ParalaxFallComponent,
    DataTableComponent,
    DataTable2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
