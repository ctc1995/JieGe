//路由配置模块
import { NgModule } from '@angular/core'
import { RouterModule,Routes } from '@angular/router'

import { HomeComponent } from './home.component'

const routers:Routes=[
    {
        path:'',
        component:HomeComponent
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
export class HomeRoutingModule{}