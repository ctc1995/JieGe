import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { CaiyiComponent } from './caiyi.component'

const routes:Routes=[
    {
        path:'',
        component: CaiyiComponent
    }
]

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class CaiyiRoutingModule{}