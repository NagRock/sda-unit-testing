import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CashMachineComponent } from './cash-machine/cash-machine.component';
import {CashMachine} from "./CashMachine";

@NgModule({
  declarations: [
    AppComponent,
    CashMachineComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [CashMachine],
  bootstrap: [AppComponent]
})
export class AppModule { }
