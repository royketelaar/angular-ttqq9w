import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PriceComparatorComponent } from './price-comparator/price-comparator.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, PriceComparatorComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
