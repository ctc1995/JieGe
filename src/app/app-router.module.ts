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
      path: 'about', 
      loadChildren: './about/about.module#AboutModule'
    },
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule { }