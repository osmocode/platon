import { Component } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

// TODO use material design instead of bootsrap
@Component({
    selector: 'formly-array-type',
    template: `
  <div class="mb-3">
    <legend *ngIf="to.label">{{ to.label }}</legend>
    <p *ngIf="to.description">{{ to.description }}</p>

    <div class="alert alert-danger" role="alert" *ngIf="showError && formControl.errors">
      <formly-validation-message [field]="field"></formly-validation-message>
    </div>

    <div *ngFor="let field of field.fieldGroup;let i = index;" class="row align-items-center">
      <formly-field class="col" [field]="field"></formly-field>
      <ng-container *ngIf="field.templateOptions">
        <div *ngIf="field.templateOptions['removable'] !== false" class="col-2 text-right">
            <button nz-button nzShape="circle" nzType="primary" (click)="remove(i)">
                <i nz-icon nzType="minus" nzTheme="outline"></i>
            </button>
        </div>
      </ng-container>
    </div>

    <div class="d-flex flex-row-reverse">
        <button nz-button nzShape="circle" nzType="primary" (click)="add()">
           <i nz-icon nzType="plus" nzTheme="outline"></i>
        </button>
    </div>
  </div>
  `,
    // Taken from bootstrap source code
    styles: [`
    .mb-3 {
      margin-bottom: 1rem;
    }

    .row {
        display: flex;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
    }

    .col, .col-2 {
        position: relative;
        width: 100%;
        min-height: 1px;
        padding-right: 15px;
        padding-left:15px
    }

    .col {
        flex-basis: 0;
        flex-grow: 1;
        max-width:100%
    }

    .col-2 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 16.666667%;
        flex: 0 0 16.666667%;
        max-width:16.666667%
    }

    .text-right {
        text-align: right;
    }

    .align-items-center {
        align-items: center;
    }

    .d-flex {
        display: flex;
    }

    .flex-row-reverse {
        flex-direction: row-reverse;
    }
    `]
})
export class ArrayTypeComponent extends FieldArrayType { }
