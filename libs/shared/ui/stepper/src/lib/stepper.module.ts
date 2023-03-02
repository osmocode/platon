import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { StepperComponent } from './stepper.component';
import { StepDirective } from './step.directive';

@NgModule({
    imports: [
        CommonModule,

        NzIconModule,
        NzStepsModule
    ],
    exports: [
        StepperComponent,
        StepDirective,
    ],
    declarations: [
        StepperComponent,
        StepDirective
    ],
})
export class SharedUiStepperModule { }
