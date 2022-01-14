import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// FormsModule: Required for the Two-Way Binding using [(ngModel)]
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductComponent} from './components/productcomponent/app.product.component';
import {DataGridComponent} from './directives/componentdirectives/app.datagrid.component';
import { ColorDirective } from './directives/attributedirective/app.color.directive';
import { ProductFormComponent } from './components/productfromcomponent/app.productform.component';

@NgModule({
  declarations: [
    AppComponent,ProductComponent, DataGridComponent, ColorDirective,
    ProductFormComponent
  ],
  imports: [
    BrowserModule, FormsModule,ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ProductFormComponent]
})
export class AppModule { }
