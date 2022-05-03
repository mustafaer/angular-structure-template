import {Injectable} from "@angular/core";
import {catchError, map, Observable, throwError} from "rxjs";
import {ActivatedRouteSnapshot, CanActivate, Router, UrlTree} from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";
import {CustomFunctions} from "../../models/custom-function.model";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {


    customFunctions: CustomFunctions = new CustomFunctions();
    constructor(private authService: AuthService,
                private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        const token = this.customFunctions.getLocalStorage(this.customFunctions.storageItems.token);

        return this.authService.verifyToken(token).pipe(map(() => {
                this.customFunctions.setLocalStorage({key: this.customFunctions.storageItems.token, value: token});
                return true;
            }),
            catchError((err: any) => {
                this.router.navigate(['login']).then();
                return throwError(err);
            }));
    }

}