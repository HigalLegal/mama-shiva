import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt'
registerLocaleData(localePt)

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './shared/menu-bar/menu-bar.component';
import { ParallaxModule } from './parallax/parallax.module';
import { HomeComponent } from './components/home/home.component';
import { MenuFoodsComponent } from './components/menu-foods/menu-foods.component';
import { AboutComponent } from './components/about/about.component';
import { CompanyValuesComponent } from './components/company-values/company-values.component';
import { FooterComponent } from './shared/footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomeComponent,
    MenuFoodsComponent,
    AboutComponent,
    CompanyValuesComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParallaxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
