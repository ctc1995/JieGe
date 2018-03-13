import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        LoginRoutingModule
    ],
    exports: [],
    declarations: [LoginComponent],
    providers: [],
})
export class LoginModule { }
