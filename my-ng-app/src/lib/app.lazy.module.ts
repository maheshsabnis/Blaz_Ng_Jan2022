import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import {SampleComponent} from './components/app.sample.component';



// Lets define a Route Table for this lazy loaded module

const routes:Routes= [
  {path:'', component:SampleComponent}
];



@NgModule({
  // Lets register the current route table as child
  // for the container where the current module is
  // loaded
  imports:[CommonModule, RouterModule.forChild(routes)],
  declarations:[SampleComponent]
})
export class LazyModule{

}
