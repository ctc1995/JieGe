import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';

import { BusinessRoutingModule } from './busniess-routing.module'

import { BusinessComponent } from './business.component'

@NgModule({
    imports:[
        CommonModule,
        BusinessRoutingModule
    ],
    providers:[],
    declarations:[
        BusinessComponent
    ]
})

export class BusinessModule{}