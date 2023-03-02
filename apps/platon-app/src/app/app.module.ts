import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedVendorsModule } from '@platon/shared/vendors';
import { FeatureWebComponentModule } from '@platon/web-component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreConfigModule } from '@platon/core/config';

import { AppComponent } from './app.component';


@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        CoreConfigModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        SharedVendorsModule,
        FeatureWebComponentModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
