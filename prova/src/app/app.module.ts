import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {httpclientmodule}
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    httpclient,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
