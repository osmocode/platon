import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChild,
    HostBinding,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    TemplateRef,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { SearchBar } from './search-bar';

@Component({
    selector: 'ui-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent implements OnInit, OnChanges, OnDestroy {
    private readonly subscriptions: Subscription[] = [];


    @Input()
    searchBar!: SearchBar<any>;

    @Input()
    disabled = false;

    @ContentChild(TemplateRef)
    suggestionTemplate?: TemplateRef<any>;

    control = new FormControl();

    suggesting = false;
    suggestions: any[] = [];

    @HostBinding('class')
    get hostClass(): string {
        return this.disabled ? 'mat-elevation-z1' : 'mat-elevation-z2';
    }

    constructor(private readonly changeDetector: ChangeDetectorRef) { }

    ngOnInit(): void {
        this.subscriptions.push(
            this.control.valueChanges
                .pipe(
                    debounceTime(500), // Wait for the user to stop typing (1/2 second in this case)
                    distinctUntilChanged(), // Wait until the search text changes.
                    switchMap((query) => {
                        this.startFiltering(query);
                        return [];
                    }) // https://angular.io/guide/http#using-the-switchmap-operator
                )
                .subscribe()
        );

        this.control.patchValue(this.searchBar.value || '');

        this.defineSetterForValueProperty();

        setTimeout(() => {
            if (this.searchBar.onReady) {
                this.searchBar.onReady();
            }
        }); // avoid ExpressionChangedAfterItHasBeenCheckedError
    }

    ngOnChanges(): void {
        if (this.disabled) {
            this.control.disable();
        } else if (!this.control.enabled) {
            this.control.enable();
        }
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach((s) => s.unsubscribe());
    }

    onKeyDownEnter(): void {
        if (this.searchBar?.onSearch) {
            this.searchBar.onSearch(this.control.value);
        }
    }

    onSelect(event: any, item: any): void {
        if (event.isUserInput && this.searchBar.onSelect) {
            this.searchBar.onSelect(item);
        }
    }

    onComplete(item: any): any {
        if (this.searchBar.complete) {
            return this.searchBar.complete(item);
        }
        return item;
    }

    private stopFiltering(): void {
        this.subscriptions.forEach((s, i) => {
            if (i > 0) {
                s.unsubscribe();
            }
        });
        this.subscriptions.splice(1, this.subscriptions.length);
    }

    private startFiltering(query?: string): void {
        this.suggesting = true;
        this.suggestions = [];
        this.changeDetector.markForCheck();

        this.stopFiltering();

        this.subscriptions.push(
            this.searchBar?.filterer.run(query || '').subscribe({
                next: (response) => {
                    this.suggestions = response;
                    this.suggesting = false;
                    this.changeDetector.markForCheck();
                    this.stopFiltering();
                },
                error: (error) => {
                    console.error(error);
                    this.stopFiltering();
                },
            })
        );
    }

    private defineSetterForValueProperty(): void {
        if (!Object.getOwnPropertyDescriptor(this.searchBar, 'value')?.set) {
            Object.defineProperty(this.searchBar, 'value', {
                get: () => {
                    return this.control.value;
                },
                set: (value: string) => {
                    this.control.patchValue(value || '');
                    this.onKeyDownEnter();
                },
            });
        }
    }
}
