import { NgModule, Type } from '@angular/core';

import { IDynamicModule } from '@cisstech/nge/services';

import { BaseModule } from '../../shared/components/base/base.module';
import { TimerComponent } from './timer.component';

@NgModule({
    declarations: [TimerComponent],
    imports: [
        BaseModule
    ],
    exports: [TimerComponent],
})
export class TimerModule implements IDynamicModule {
    component: Type<any> = TimerComponent;
}
