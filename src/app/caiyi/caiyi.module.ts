import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { CaiyiRoutingModule } from './caiyi-routing.module';
import { CaiyiComponent } from './caiyi.component';

@NgModule({
    imports: [
        CommonModule,
        CaiyiRoutingModule
    ],
    exports: [],
    declarations: [CaiyiComponent],
    providers: [],
})
export class CaiyiModule { }
