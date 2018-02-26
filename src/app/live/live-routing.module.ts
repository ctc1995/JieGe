import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { LiveComponent } from './live.component'

const routers: Routes=[
    {
        path: '',
        component: LiveComponent
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

export class LiveRoutingModule{}