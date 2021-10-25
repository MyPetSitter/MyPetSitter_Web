import { StorageService } from 'src/service/storage.service';
import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class InterceptorServicoPetSitter implements HttpInterceptor {


constructor(private storage: StorageService){}

    intercept(request: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>> {
        let localUser = this.storage.getLocalUser();
        request = request.clone({
            setHeaders: {
                Authorization: 'Bearer ' + localUser.token
            }
        })
        return next.handle(request)
    }
}
export const AuthInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorServicoPetSitter,
    multi: true,
};