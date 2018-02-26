import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { EduRoutingModule } from './edu-routing.module';
import { EduComponent } from './edu.component';

@NgModule({
    imports: [
        CommonModule,
        EduRoutingModule
    ],
    exports: [],
    declarations: [EduComponent],
    providers: [],
})
export class EduModule { }
