import {Injectable} from "@angular/core";
import {ServerConnectionsService} from "../server-connection/server-connections.service";
import {NotificationService} from "../notification/notification.service";
import {api} from "../server-connection/api-urls";
import {TranslatePipe} from "../../pipes/translate/translate.pipe";
import {TranslateService} from "../translate/translate.service";
import {map, Observable} from "rxjs";
import {CustomFunctions} from "../../models/custom-function.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    customFunctions: CustomFunctions = new CustomFunctions();

    constructor(private serverConnection: ServerConnectionsService,
                private notification: NotificationService,
                private translate: TranslatePipe,
                private translateService: TranslateService) {
    }

    verifyToken(token: string): Observable<any> {
        return this.serverConnection.ServerPostWithoutLogin(api.token.verify, {token})
            .pipe(map(res => res)); // 200 or 404
    }

    serverLogout(): void {
        this.serverConnection.ServerDelete(api.login.logout).subscribe(() => {
            },
            error => {
                this.notification.error(this.translate.transform('logoutError'));
            },
            () => {
                this.ClearSession();
            });
    }

    ClearSession(): void {
        const tempLang = this.translateService.currentLang;
        localStorage.clear();
        sessionStorage.clear();
        this.customFunctions.setLocalStorage({key: this.customFunctions.storageItems.lang, value: tempLang})
        window.location.href = window.location.origin + '/login';
    }
}