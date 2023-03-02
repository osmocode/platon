import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpParamEncoderInterceptor } from './http/http-param-encoder.interceptor';
import { HttpCaseConverterInterceptor } from './http/http-case-converter.interceptor';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import en from '@angular/common/locales/en';

registerLocaleData(fr);
registerLocaleData(en);

/** config ng-zorro-antd i18n **/
import { NZ_I18N, en_US, fr_FR } from 'ng-zorro-antd/i18n';

@NgModule({
    declarations: [],
    imports: [
        HttpClientModule,
        HttpClientXsrfModule.withOptions({
            cookieName: 'csrftoken',
            headerName: 'X-CSRFToken',
        }),
    ],
    exports: [
        HttpClientModule,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: HttpParamEncoderInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: HttpCaseConverterInterceptor, multi: true },
        // https://ng.ant.design/docs/i18n/en
        {
            provide: NZ_I18N,
            useFactory: (localId: string) => {
                switch (localId) {
                    case 'en':
                        return en_US;
                    /** keep the same with angular.json/i18n/locales configuration **/
                    case 'fr':
                        return fr_FR;
                    default:
                        return fr_FR;
                }
            },
            deps: [LOCALE_ID]
        }
    ]
})
export class CoreConfigModule { }
