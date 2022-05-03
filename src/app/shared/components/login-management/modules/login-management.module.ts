import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {TranslatePipeModule} from "../../../pipes/translate/translate-pipe.module";
import {LoginManagementComponent} from "../login-management.component";
import {LoginModule} from "../components/login/modules/login.module";
import {LoginManagementRoutingModule} from "./login-management-routing.module";

@NgModule({
    declarations: [
        LoginManagementComponent,
    ],
    imports: [
        CommonModule,
        TranslatePipeModule,
        FormsModule,
        LoginManagementRoutingModule,
        LoginModule
    ],
    exports: [
        LoginManagementComponent
    ]
})
export class LoginManagementModule {
}