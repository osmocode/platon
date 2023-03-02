import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CssComponent } from './css.component';
import { NgeMarkdownModule } from '@cisstech/nge/markdown';
import { SharedUiDialogModule } from '@platon/shared/ui/dialog';
import { IDynamicModule } from '@cisstech/nge/services';

@NgModule({
  imports: [
    CommonModule,
    NgeMarkdownModule,
    SharedUiDialogModule,
  ],
  declarations: [CssComponent]
})
export class CssModule implements IDynamicModule {
    component = CssComponent;
}
