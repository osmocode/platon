import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocsComponent } from './docs.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { NgeMarkdownModule } from '@cisstech/nge/markdown';
import { NgJsonEditorModule } from 'ang-jsoneditor'
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatTooltipModule,
    NgeMarkdownModule,
    NgJsonEditorModule,
  ],
  declarations: [DocsComponent, ShowcaseComponent],
})
export class DocsModule {
    component = DocsComponent;
}
