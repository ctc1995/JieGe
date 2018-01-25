import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataService } from './data-service.service'
@NgModule({
  imports: [
    CommonModule
  ],
  providers:[
    DataService
  ],
  declarations: []
})
export class DataModule { }
