import { NgModule, Type } from '@angular/core';

import { IDynamicModule } from '@cisstech/nge/services';

import { BaseModule } from '../../shared/components/base/base.module';

import { HintComponent } from './hint.component';

@NgModule({
    declarations: [HintComponent],
    imports: [
        BaseModule
    ],
    exports: [HintComponent],
})
export class HintModule implements IDynamicModule {
    component: Type<any> = HintComponent;
}
