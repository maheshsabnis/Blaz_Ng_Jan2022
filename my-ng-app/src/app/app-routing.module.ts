import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/productcomponent/app.product.component';
import { AboutComponent } from './components/routingapp/app.about.component';
import { ContactComponent } from './components/routingapp/app.contact.component';
import { HomeComponent } from './components/routingapp/app.home.component';



// define Route Table
const routes: Routes = [
  {path:'', component: HomeComponent}, // default component
  {path:'contact/:id', component: ContactComponent}, // routing with parameter
  {path: 'about', component:AboutComponent,
     // Children accepts the route table
     children:[
       {path: 'product', component: ProductComponent}
    ]},
  {path:'**', redirectTo:''} // redirect to default component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // The Route table is registered at root level
  exports: [RouterModule] // exporting the Router Object Model, so that the importer will be using it
})
export class AppRoutingModule { }
