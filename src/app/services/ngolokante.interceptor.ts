import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from "@angular/common/http"
import { Injectable } from '@angular/core'
import { Observable } from "rxjs"

@Injectable()
export class NgoloKanteInterceptor implements HttpInterceptor {
  token;
  constructor() {
     this.token = localStorage.getItem('token');
  }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const cloneReq = req.clone({
      setHeaders: {
        authorization: 'Bearer ' + this.token
      }
    })
    return next.handle(cloneReq)
  }
}
