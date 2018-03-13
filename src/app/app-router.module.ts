import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { LogupComponent } from './logup/logup.component'

const routes: Routes = [
    { 
      path: 'index', 
      loadChildren: './home/home.module#HomeModule',
    },
    { 
      path: 'live', 
      loadChildren: './live/live.module#LiveModule'
    },
    { 
      path: 'land', 
      loadChildren: './land/land.module#LandModule'
    },
    {
      path: 'business',
      loadChildren: './business/business.module#BusinessModule'
    },
    {
      path: 'live',
      loadChildren: './live/live.module#LiveModule'
    },
    {
      path: 'caiyi',
      loadChildren: './caiyi/caiyi.module#CaiyiModule'
    },
    {
      path: 'edu',
      loadChildren: './edu/edu.module#EduModule'
    },
    {
      path: 'video',
      loadChildren: './video/video.module#VideoModule'
    },
    {
      path: 'room',
      loadChildren: './room/room.module#RoomModule'
    },
    { 
      path: 'login', 
      component: LoginComponent
    },
    { 
      path: 'logup', 
      component: LogupComponent
    },
    { 
      path: 'about', 
      loadChildren: './about/about.module#AboutModule'
    }
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes,{useHash: true})
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule { }