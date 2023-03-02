import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { OverlayModule } from '@angular/cdk/overlay';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';

import { NgeMarkdownModule } from '@cisstech/nge/markdown';

import { ConfirmComponent } from './confirm/confirm.component';
import { PromptComponent } from './prompt/prompt.component';

@NgModule({
  declarations: [
    ConfirmComponent,
    PromptComponent
  ],
  imports: [
      CommonModule,
      OverlayModule,
      MatInputModule,
      MatButtonModule,
      MatDialogModule,
      MatSnackBarModule,
      NgeMarkdownModule,
      MatFormFieldModule,
      FormsModule,
  ],
  exports: [
    ConfirmComponent,
    PromptComponent,

    OverlayModule,
    MatDialogModule,
  ],
})
export class SharedUiDialogModule { }
