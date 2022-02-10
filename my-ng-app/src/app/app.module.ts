import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// FormsModule: Required for the Two-Way Binding using [(ngModel)]
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// importing HttpClientModule
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductComponent} from './components/productcomponent/app.product.component';
import {DataGridComponent} from './directives/componentdirectives/app.datagrid.component';
import { ColorDirective } from './directives/attributedirective/app.color.directive';
import { ProductFormComponent } from './components/productfromcomponent/app.productform.component';
import { UtilityServiceComponent } from './components/utilityservicecomponent/app.utilityservice.component';
import { DeptSenderComponent } from './components/communicationcomponents/app.deptsender.component';
import { EmpReceiverComponent } from './components/communicationcomponents/app.empreceiver.component';
import { DepartmentHttpServiceComponent } from './components/httpservicecomponent/app.departmenthttpservice.component';
import { HomeComponent } from './components/routingapp/app.home.component';
import { ContactComponent } from './components/routingapp/app.contact.component';
import { AboutComponent } from './components/routingapp/app.about.component';
import { MainRoutingComponent } from './components/routingapp/app.mainrouting.component';

@NgModule({
  declarations: [
    AppComponent,ProductComponent, DataGridComponent, ColorDirective,
    ProductFormComponent, UtilityServiceComponent,
    DeptSenderComponent,EmpReceiverComponent,
    DepartmentHttpServiceComponent,
    HomeComponent,ContactComponent,AboutComponent,MainRoutingComponent
  ],
  imports: [
    BrowserModule, FormsModule,ReactiveFormsModule, HttpClientModule,
    AppRoutingModule // importing the Routing Object Model for routing
  ],
  providers: [],
  bootstrap: [ProductComponent]
})
export class AppModule { }
