import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { EduComponent } from './edu.component'

const routes:Routes=[
    {
        path:'',
        component: EduComponent
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

export class EduRoutingModule{}