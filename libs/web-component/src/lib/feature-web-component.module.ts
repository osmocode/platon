// ANGULAR
import { NgModule } from '@angular/core';

// LIBS
import { NgeElementModule } from '@cisstech/nge/elements';

// MODULE
import { WEB_COMPONENTS_BUNDLES, WEB_COMPONENTS_REGISTRY } from './web-component-registry';

@NgModule({
    declarations: [
    ],
    imports: [
        NgeElementModule.forRoot(WEB_COMPONENTS_BUNDLES)
    ],
    exports: [
        NgeElementModule,
    ],
    providers: [WEB_COMPONENTS_REGISTRY]
})
export class FeatureWebComponentModule {}
