import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { SearchPipe } from './search.pipe';

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
    SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastModule.forRoot()
  ],
  providers: [TableDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
