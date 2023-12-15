import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      setHeaders: {
        "X-Api-Key": "k7HAHRc2R8JkbEjAgYVVPA==gDee1S5elsY9G9PS"
      }
    });
    console.log("The workout plan has been updated !");
    return next.handle(authReq);
  }
}
