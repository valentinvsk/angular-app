import { NgModule, NgZone } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import * as _ from 'lodash';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TableDataService } from './table-data.service';
import { HttpModule } from '@angular/http';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardsComponent } from './cards/cards.component';
import { AnimatedComponent } from './animated/animated.component';
import { PawComponent } from './paw/paw.component';
import { WalkingCatComponent } from './walking-cat/walking-cat.component';
import { WindowCatComponent } from './window-cat/window-cat.component';
import { ParalaxFallComponent } from './paralax-fall/paralax-fall.component';

import { DataTableComponent } from './data-table/data-table.component';
import { EventButtonComponent } from './event-button/event-button.component';
import { RowItemComponent } from './row-item/row-item.component';
import { SearchPipe } from './search.pipe';

import { NvD3Module } from 'ng2-nvd3';
import { DataChartComponent } from './data-chart/data-chart.component';
import 'd3';
import 'nvd3';

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
    EventButtonComponent,
    RowItemComponent,
    SearchPipe,
    DataChartComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NvD3Module
  ],
  providers: [TableDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
