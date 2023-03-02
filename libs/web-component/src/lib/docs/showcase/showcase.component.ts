import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ResourceLoaderService } from '@cisstech/nge/services';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';
import { WebComponentDefinition } from '../../web-component';

@Component({
    selector: 'wc-showcase',
    templateUrl: './showcase.component.html',
    styleUrls: ['./showcase.component.scss'],
})
export class ShowcaseComponent implements OnInit {
    @Input() definition!: WebComponentDefinition;

    @ViewChild(JsonEditorComponent)
    readonly editor?: JsonEditorComponent;
    readonly options = new JsonEditorOptions();

    showEditor = true;
    component?: any;

    constructor(
        private readonly el: ElementRef<HTMLElement>,
        private readonly resourceLoader: ResourceLoaderService,
    ) {}

    async ngOnInit() {
        this.resourceLoader.loadAllAsync([
            ['style', 'assets/vendors/jsoneditor/jsoneditor.min.css']
        ]).toPromise().catch();

        const host = this.el.nativeElement.firstElementChild;
        this.component = document.createElement(
            this.definition.selector
        ) as any;

        const { showcase, schema } = this.definition;
        if (showcase) {
            this.component.state = {
                ...showcase,
                ...Object.keys(this.definition.schema.properties).filter(k => {
                    return !showcase.hasOwnProperty(k);
                }).reduce((rec, curr) => {
                    if (!showcase.hasOwnProperty(curr))
                        rec[curr] = schema.properties[curr].default;
                    return rec;
                }, {} as Record<string, any>)
            }
        }
        host?.appendChild(this.component);

        this.options.modes = ['tree'/* , 'view', 'form', 'code', 'text' */];
        this.options.language = 'fr-FR';
        this.options.schema = schema;
        this.options.mainMenuBar = false;
        this.options.sortObjectKeys = true;
    }

    editorToComponent() {
        try {
            const state = this.editor?.get();
            if (state && this.component) {
                this.component.state = state;
            }
        } catch (error) {
            console.error(error);
        }
    }

    componentToEditor() {
        this.editor?.set(this.component.state);
    }

}
