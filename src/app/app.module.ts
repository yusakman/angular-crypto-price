import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { CoinsComponent } from "./coins/coins.component";
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, CoinsComponent, NavbarComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
