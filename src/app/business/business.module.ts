import { NgModule } from '@angular/core'

import { BusinessRoutingModule } from './busniess-routing.module'

import { BusinessComponent } from './business.component'

@NgModule({
    imports:[
        BusinessRoutingModule
    ],
    providers:[],
    declarations:[
        BusinessComponent
    ]
})

export class BusinessModule{}