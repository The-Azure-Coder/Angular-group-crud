import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './details/details.component';
import { PostComponent } from './post/post.component';
import { ProducteditComponent } from './productedit/productedit.component';
import { InventoryComponent } from './inventory/inventory.component';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch:'full'},
  {path: "home", component:HomeComponent},
  {path: "about", component:AboutComponent},
  {path: "home/details/:id", component:DetailsComponent},
  {path: "post", component:PostComponent},
  {path: "inventory/edit/:id", component:ProducteditComponent},
  {path: "inventory", component:InventoryComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
