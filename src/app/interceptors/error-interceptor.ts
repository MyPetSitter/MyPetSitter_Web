  
import { Injectable } from '@angular/core';
import {HttpEvent} from '@angular/common/http';
import{HttpInterceptor} from '@angular/common/http';
import {HttpHandler} from '@angular/common/http';
import {HttpRequest} from '@angular/common/http';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { Observable } from 'rxjs/Rx'; // IMPORTANTE: IMPORT ATUALIZADO


@Injectable()

export class ErrorInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('passou')
        return next.handle(req)
        .catch((error, caught) => {
            let errorObj = error
            if(errorObj.error) {
                errorObj = errorObj.error
            }
            if(!errorObj.status) {
                errorObj = JSON.parse(errorObj)
            }
            return Observable.throw(errorObj)
        })
    }
}
export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
};