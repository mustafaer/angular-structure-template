import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LoginLayoutComponent} from "../login-layout.component";

const routes: Routes = [
    {
        path: '', component: LoginLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('../../../../components/login/modules/login.module').then(m => m.LoginModule)
            }, {
                path: '**',
                redirectTo: '/'
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginLayoutRoutingModule {
}
