import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoDashComponent } from './components/lo-dash/lo-dash.component';

@NgModule({
  declarations: [
    AppComponent,
    LoDashComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
