import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DataTablesModule } from 'angular-datatables';
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
import { SmartTableComponent } from './smart-table/smart-table.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ComboChartComponent } from './combo-chart/combo-chart.component';
import { ChartsModule } from 'ng2-charts';
import { HttpModule } from '@angular/http';
import { JsonProviderService } from './json-provider.service';
import { TestBlockComponent } from './test-block/test-block.component';

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
    DataTable2Component,
    SmartTableComponent,
    ComboChartComponent,
    TestBlockComponent
  ],
  imports: [
    BrowserModule,
    Ng2SmartTableModule,
    DataTablesModule,
    ChartsModule,
    HttpModule
  ],
  providers: [JsonProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
