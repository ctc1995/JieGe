import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { 
      path: 'index', 
      loadChildren: './home/home.module#HomeModule'
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