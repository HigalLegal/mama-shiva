import { CompanyValuesComponent } from './components/company-values/company-values.component';
import { AboutComponent } from './components/about/about.component';
import { MenuFoodsComponent } from './components/menu-foods/menu-foods.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path: "cardapio",
    component: MenuFoodsComponent,
    pathMatch: "full"
  },
  {
    path: "sobre",
    component: AboutComponent,
    pathMatch: "full"
  },
  {
    path: "missao",
    component: CompanyValuesComponent,
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
