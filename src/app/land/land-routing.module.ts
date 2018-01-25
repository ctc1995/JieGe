import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { LandComponent } from './land.component'

const routers: Routes=[
    {
        path: '',
        component: LandComponent
    }
]

@NgModule({
    imports:[
        RouterModule.forChild(routers)
    ],
    exports:[
        RouterModule
    ]
})

export class LandRoutingModule{}