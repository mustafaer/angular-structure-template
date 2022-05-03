import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {TranslatePipeModule} from "../../../shared/pipes/translate/translate-pipe.module";
import {LoginComponent} from "../login.component";
import {LoginRoutingModule} from "./login-routing.module";

@NgModule({
    declarations: [
        LoginComponent,
    ],
    imports: [
        CommonModule,
        TranslatePipeModule,
        FormsModule,
        LoginRoutingModule
    ],
    exports: [
        LoginComponent
    ]
})
export class LoginModule {
}