import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home.component'
import { setHightDirective } from '../common/setHight.directive'
@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  declarations: [
    HomeComponent,
    setHightDirective
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
