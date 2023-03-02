import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { NgArrayPipesModule } from 'ngx-pipes';

import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';

import { SearchBarComponent } from './search-bar.component';
import { SearchBannerComponent } from './search-banner/search-banner.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        NgArrayPipesModule,
        NzSpinModule,
        NzAutocompleteModule,
    ],
    declarations: [SearchBarComponent, SearchBannerComponent],
    exports: [SearchBarComponent, SearchBannerComponent]
})
export class SharedUiSearchModule { }
