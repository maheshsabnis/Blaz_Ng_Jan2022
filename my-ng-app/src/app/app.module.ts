import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// FormsModule: Required for the Two-Way Binding using [(ngModel)]
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
