import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthHTTPInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    // if (sessionStorage.getItem('email') && sessionStorage.getItem('basicAuth')) {
    //   req = req.clone({
    //     setHeaders: {
    //       Authorization: sessionStorage.getItem('basicAuth')
    //     }
    //   })
    // }

    return next.handle(req);
  }

}