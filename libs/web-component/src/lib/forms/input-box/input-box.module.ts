import { NgModule, Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { IDynamicModule } from '@cisstech/nge/services';
import { IconGrPipeModule } from '@platon/shared/utils';

import { BaseModule } from '../../shared/components/base/base.module';
import { InputBoxComponent } from './input-box.component';

@NgModule({
    declarations: [InputBoxComponent],
    imports: [
        BaseModule,
        IconGrPipeModule,

        FormsModule,
        ReactiveFormsModule,

        MatInputModule,
        MatFormFieldModule,
        MatAutocompleteModule
    ],
    exports: [InputBoxComponent],
})
export class InputBoxModule implements IDynamicModule {
    component: Type<any> = InputBoxComponent;
}
