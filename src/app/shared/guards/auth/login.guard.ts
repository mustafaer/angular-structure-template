import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, UrlTree} from "@angular/router";
import {CustomFunctions} from "../../models/custom-function.model";
import {Observable} from "rxjs";
import {AuthService} from "../../services/auth/auth.service";

@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanActivate {

    customFunctions: CustomFunctions = new CustomFunctions();

    constructor(private authService: AuthService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        let responseStatus = false;
        const token = this.customFunctions.getLocalStorage(this.customFunctions.storageItems.token);
        if (token) {
            this.authService.verifyToken(token).subscribe(() => {
                this.customFunctions.setLocalStorage({key: this.customFunctions.storageItems.token, value: token});
                this.router.navigate(['/']).then();
                responseStatus = true;
            }, () => {
                this.customFunctions.removeLocalStorageItem(this.customFunctions.storageItems.token);
                this.router.navigate(['login']).then();
                responseStatus = false;
                // TODO: error message
            });
        }
        return !responseStatus;
    }

}
