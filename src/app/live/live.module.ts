import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { LiveRoutingModule } from './live-routing.module';
import { LiveComponent } from './live.component';

@NgModule({
    imports: [
        CommonModule,
        LiveRoutingModule
    ],
    exports: [],
    declarations: [LiveComponent],
    providers: [],
})
export class LiveModule { }
