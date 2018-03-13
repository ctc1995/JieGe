import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'

import { LogupRoutingModule } from './logup-routing.module';
import { LogupComponent } from './logup.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        LogupRoutingModule
    ],
    exports: [],
    declarations: [LogupComponent],
    providers: [],
})
export class LogupModule { }
