import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { DescriptionComponent } from './description/description.component';
import { MissionComponent } from './mission/mission.component';
import { ValuesComponent } from './values/values.component';



@NgModule({
  declarations: [ BannerComponent, DescriptionComponent, MissionComponent, ValuesComponent ],
  imports: [
    CommonModule
  ],
  exports: [
    BannerComponent,
    DescriptionComponent,
    MissionComponent,
    ValuesComponent
  ]
})
export class ParallaxModule { }
