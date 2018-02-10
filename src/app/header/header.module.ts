import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { DownListDirective } from '../common/downList.directive'
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DownListDirective,
    HeaderComponent
  ],
  exports:[
    HeaderComponent
  ]
})
export class HeaderModule { }
