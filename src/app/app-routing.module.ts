import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemModelComponent } from './add-item-model/add-item-model.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';

const routes: Routes = [
  {path:'contact',component:ContactusComponent},
  {path:'additem',component:AddItemModelComponent},
  {path:'listitems',component:ItemsComponent},
  {path:'',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
