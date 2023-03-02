import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


// TODO apply only for requests to platon api

@Injectable()
export class HttpCaseConverterInterceptor implements HttpInterceptor {
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            map((e: HttpEvent<any>) => {
                if (e instanceof HttpResponse) {
                    const body = camelCase(e.body);
                    return e.clone({ body });
                }
                return e;
            })
        );
    }
}

const camelCase = (obj: any): any => {
    if (obj == null) {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map(e => camelCase(e));
    }

    if (typeof obj !== 'object') {
        return obj;
    }

    return Object.entries(obj).reduce((acc, [key, val]) => {
        const modifiedKey = key.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
        const modifiedVal =
            typeof val === 'object' && val !== null ? camelCase(val) : val;
        return {
            ...acc,
            ...{ [modifiedKey]: modifiedVal },
        };
    }, {});
}
