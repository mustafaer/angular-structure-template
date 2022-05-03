import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'login',
                loadChildren: () => import('./shared/layouts/login-layout/modules/login-layout.module').then(m => m.LoginLayoutModule)
            },
            {
                path: '',
                loadChildren: () => import('./shared/layouts/dashboard-layout/modules/dashboard-layout.module')
                    .then(m => m.DashboardLayoutModule)
            }
        ]
    },
    {
        path: '**', redirectTo: '/dashboard',
    },
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
